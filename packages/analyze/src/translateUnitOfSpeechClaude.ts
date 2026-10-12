import Anthropic from '@anthropic-ai/sdk';
import { parseJson } from '@vocably/api';
import { languageList, Result, resultify } from '@vocably/model';
import { timeout } from '@vocably/sulna';
import { createHash } from 'crypto';
import { isArray, isObject, uniq } from 'lodash-es';
import { config } from './config';
import {
  getExpectedNumberOfTranslations,
  TranslateUnitOfSpeechPayload as Payload,
} from './translateUnitOfSpeechAi';

const CLAUDE_MODEL = 'claude-sonnet-5-5';

type ClaudeTranslationParams = Anthropic.MessageCreateParamsNonStreaming;

/**
 * Structured outputs require an object at the root,
 * so translations are wrapped into `{ translations: [...] }`.
 */
const translationsSchema = {
  type: 'object',
  properties: {
    translations: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  required: ['translations'],
  additionalProperties: false,
};

const getClaudeTranslationParams = ({
  sourceLanguage,
  targetLanguage,
  source,
  partOfSpeech,
  definitions = [],
  examples = [],
  number,
}: Payload): ClaudeTranslationParams => {
  const safeSourceLanguage = languageList[sourceLanguage];
  const safeTargetLanguage = languageList[targetLanguage];

  const expectedNumberOfTranslations =
    getExpectedNumberOfTranslations(definitions);

  const definitionsMd =
    definitions?.length > 0 ? [`#Definitions`, ...definitions] : [];

  const examplesMd = examples?.length > 0 ? [`#Examples`, ...examples] : [];

  return {
    model: CLAUDE_MODEL,
    max_tokens: 1024,
    // Opus 5.5 always thinks; low effort keeps dictionary lookups fast and cheap.
    output_config: {
      effort: 'low',
      format: {
        type: 'json_schema',
        schema: translationsSchema,
      },
    },
    system: [
      `You are ${safeSourceLanguage}-${safeTargetLanguage} dictionary`,
      `User provides ${safeSourceLanguage} ${partOfSpeech}.`,
      `Give up to ${expectedNumberOfTranslations} relevant translations into ${safeTargetLanguage}.${
        expectedNumberOfTranslations === 2
          ? ' Only include a second if it is a common, high-frequency usage.'
          : ''
      }`,
      partOfSpeech.includes('verb')
        ? `Consider tense of the provided ${partOfSpeech}`
        : '',
      number === 'plural' && partOfSpeech === 'noun' ? 'This is plural.' : '',
      partOfSpeech.includes('preposition')
        ? `Shortly explain in ${safeTargetLanguage} in brackets if necessary`
        : '',
      `Omit explanations`,
      `Sort results by commonality`,
    ]
      .filter((line) => !!line)
      .join('\n'),
    messages: [
      {
        role: 'user',
        content: [source, ...definitionsMd, ...examplesMd].join('\n'),
      },
    ],
  };
};

/**
 * Batch `custom_id` must match ^[a-zA-Z0-9_-]{1,64}$,
 * so the payload identity is hashed. Use this to map batch results back to payloads.
 */
export const getClaudeTranslationBatchItemKey = (payload: Payload): string =>
  createHash('sha256')
    .update(
      JSON.stringify({
        sourceLanguage: payload.sourceLanguage,
        targetLanguage: payload.targetLanguage,
        partOfSpeech: payload.partOfSpeech,
        source: payload.source,
      })
    )
    .digest('hex');

export const getClaudeTranslationBatchItem = (
  payload: Payload
): Anthropic.Messages.BatchCreateParams.Request => {
  return {
    custom_id: getClaudeTranslationBatchItemKey(payload),
    params: getClaudeTranslationParams(payload),
  };
};

const extractTranslations = (value: unknown): unknown => {
  if (isArray(value)) {
    return value;
  }

  if (isObject(value) && 'translations' in value) {
    return value.translations;
  }

  return undefined;
};

export const handleClaudeTranslationResponse = (
  message: Anthropic.Message | Anthropic.Beta.BetaMessage
): Result<string[]> => {
  if (
    message.stop_reason === 'refusal' ||
    message.stop_reason === 'max_tokens'
  ) {
    return {
      success: false,
      reason: `Claude translation stopped with reason "${message.stop_reason}".`,
      extra: {
        result: message,
      },
    };
  }

  const text = message.content
    .map((block) => (block.type === 'text' ? block.text : ''))
    .join('');

  const parseResult = parseJson(text);
  if (!parseResult.success) {
    return parseResult;
  }

  const rawTranslations = extractTranslations(parseResult.value);

  if (
    !isArray(rawTranslations) ||
    !rawTranslations.every((t) => typeof t === 'string')
  ) {
    return {
      success: false,
      reason: `The provided result is not an array of valid AI translations.`,
      extra: {
        result: text,
      },
    };
  }

  const translations = uniq(
    rawTranslations.map((r: string) => r.trim()).filter((r) => !!r)
  );

  if (translations.length === 0) {
    return {
      success: false,
      reason: `The translations list is empty`,
      extra: {
        result: text,
      },
    };
  }

  return {
    success: true,
    value: translations.length > 10 ? translations.slice(0, 5) : translations,
  };
};

export const translateUnitOfSpeechClaude = async (
  payload: Payload
): Promise<Result<string[]>> => {
  const client = new Anthropic({
    apiKey: config.claudeApiKey,
  });

  const abortController = new AbortController();

  const result = await resultify(
    timeout(
      // Fallbacks are not supported by the Batches API, so they're added only here.
      client.beta.messages.create(
        {
          ...getClaudeTranslationParams(payload),
          betas: ['server-side-fallback-2026-07-01'],
          fallbacks: 'default',
        },
        { signal: abortController.signal }
      ),
      abortController,
      4000
    ),
    {
      reason:
        'translateUnitOfSpeechClaude: Unable to perform Claude translation.',
      extra: payload,
    }
  );

  if (!result.success) {
    return result;
  }

  return handleClaudeTranslationResponse(result.value);
};
