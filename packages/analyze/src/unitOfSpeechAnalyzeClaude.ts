import Anthropic from '@anthropic-ai/sdk';
import { parseJson } from '@vocably/api';
import { languageList, Result, resultify } from '@vocably/model';
import { timeout } from '@vocably/sulna';
import { createHash } from 'crypto';
import { config } from './config';
import { getTranscriptionName } from './getTranscriptionName';
import { isVerb } from './isVerb';
import { caseInsensitiveLanguages, genderLanguages } from './languageSettings';
import { secureSource } from './secureSource';
import {
  AiAnalysePayload,
  AiAnalysis,
  convertInternalToExternal,
  getFrequencyPrompt,
  getInflectionsPrompt,
  InflectionKey,
  isInternalAiAnalysis,
  sanitizeAiAnalyseResult,
} from './unitOfSpeechAnalyse';

const CLAUDE_MODEL = 'claude-sonnet-5-5';

type ClaudeAnalyzeParams = Anthropic.MessageCreateParamsNonStreaming;

type JsonSchemaProperty = {
  type: 'string' | 'boolean' | 'integer' | 'array' | 'object';
  description?: string;
  enum?: string[];
  items?: JsonSchemaProperty;
};

const inflectionSchemas: Record<InflectionKey, JsonSchemaProperty> = {
  tense: { type: 'string', enum: ['present', 'past', 'future'] },
  pastTenses: { type: 'string' },
  presentTenses: { type: 'string' },
  isIrregular: { type: 'boolean' },
  pluralForm: { type: 'string' },
};

const getClaudeAnalyzeParams = ({
  source,
  partOfSpeech,
  sourceLanguage,
}: AiAnalysePayload): ClaudeAnalyzeParams => {
  const isTranscriptionNeeded = source.length <= 20;
  const languageName = languageList[sourceLanguage];

  const genders = genderLanguages[sourceLanguage] ?? [];

  const transcriptionType = getTranscriptionName(sourceLanguage);

  const securedSource = secureSource(source);

  const isCaseSensitive = !caseInsensitiveLanguages.includes(sourceLanguage);

  const inflections = getInflectionsPrompt({
    source,
    partOfSpeech,
    sourceLanguage,
  });

  const inflectionProperties: Partial<
    Record<InflectionKey, JsonSchemaProperty>
  > = Object.fromEntries(
    Object.entries(inflections).map(([key, description]) => [
      key,
      { ...inflectionSchemas[key as InflectionKey], description },
    ])
  );

  return {
    model: CLAUDE_MODEL,
    max_tokens: 4096,
    // Sonnet 5.5 rejects disabled thinking and non-default temperature;
    // low effort keeps dictionary lookups fast and cheap.
    output_config: {
      effort: 'low',
      format: {
        type: 'json_schema',
        schema: {
          type: 'object',
          properties: {
            ...(isTranscriptionNeeded
              ? {
                  transcript: {
                    type: 'string',
                    description: transcriptionType,
                  },
                }
              : {}),
            headword: {
              type: 'string',
              description: `${partOfSpeech} provided by user.${
                isCaseSensitive
                  ? ' Convert to lowercase, unless it is a word that strictly requires capitalization, then capitalize it.'
                  : ''
              }`,
            },
            exists: {
              type: 'boolean',
              description: `does the ${partOfSpeech} "${securedSource}" exist in ${languageName}?`,
            },
            definitions: {
              type: 'array',
              description: `list of concise definitions of the ${partOfSpeech} "${securedSource}". Should be in ${languageName}.${
                isVerb(partOfSpeech)
                  ? ` Consider tense of the provided ${partOfSpeech}.`
                  : ''
              }`,
              items: { type: 'string' },
            },
            examples: {
              type: 'array',
              description: `list of extremely concise examples with "${securedSource}" used as ${partOfSpeech}. Omit translations.${
                isCaseSensitive && partOfSpeech.includes('noun')
                  ? ' Uppercase when appropriate.'
                  : ''
              }`,
              items: { type: 'string' },
            },
            lemma: {
              type: 'string',
              description: `lemma or infinitive of the provided ${partOfSpeech}`,
            },
            lemmaPos: {
              type: 'string',
              description: `part of speech of the lemma in English`,
            },
            synonyms: {
              type: 'array',
              description: `short list of ${partOfSpeech}s`,
              items: { type: 'string' },
            },
            number: {
              type: 'string',
              description: `plural or singular English only`,
              enum: ['singular', 'plural'],
            },
            frequency: {
              type: 'integer',
              description: getFrequencyPrompt(languageName, partOfSpeech),
            },
            ...inflectionProperties,
            ...(genders.length > 0
              ? {
                  gender: {
                    type: 'string',
                    description: `gender of the provided word "${securedSource}"`,
                    enum: [...genders, 'other'],
                  },
                }
              : {}),
          },
          required: [
            ...(isTranscriptionNeeded ? ['transcript'] : []),
            'headword',
            'exists',
            'definitions',
            'examples',
            'lemma',
            'lemmaPos',
            'synonyms',
            'number',
            'frequency',
            // pluralForm stays optional so that the model can omit it for the
            // words which have no plural form.
            ...Object.keys(inflections).filter((key) => key !== 'pluralForm'),
            ...(genders.length > 0 ? ['gender'] : []),
          ],
          additionalProperties: false,
        },
      },
    },
    system: [
      `You are a language dictionary.`,
      `User provides a ${partOfSpeech} in ${languageName}.${
        isCaseSensitive
          ? ' The provided word can be in any case (e.g., uppercase, lowercase, or mixed case).'
          : ''
      }`,
      `Treat the input strictly as a ${partOfSpeech}`,
    ].join('\n'),
    messages: [
      {
        role: 'user',
        content: source,
      },
    ],
  };
};

/**
 * Batch `custom_id` must match ^[a-zA-Z0-9_-]{1,64}$,
 * so the payload identity is hashed. Use this to map batch results back to payloads.
 */
export const getClaudeAnalyzeBatchItemKey = (
  payload: AiAnalysePayload
): string =>
  createHash('sha256')
    .update(
      JSON.stringify({
        sourceLanguage: payload.sourceLanguage,
        partOfSpeech: payload.partOfSpeech,
        source: payload.source,
      })
    )
    .digest('hex');

export const getClaudeAnalyzeBatchItem = (
  payload: AiAnalysePayload
): Anthropic.Messages.BatchCreateParams.Request => {
  return {
    custom_id: getClaudeAnalyzeBatchItemKey(payload),
    params: getClaudeAnalyzeParams(payload),
  };
};

export const handleClaudeAnalyzeResponse = (
  message: Anthropic.Message | Anthropic.Beta.BetaMessage,
  { sourceLanguage, partOfSpeech }: AiAnalysePayload
): Result<AiAnalysis> => {
  if (
    message.stop_reason === 'refusal' ||
    message.stop_reason === 'max_tokens'
  ) {
    return {
      success: false,
      reason: `Claude analyse stopped with reason "${message.stop_reason}".`,
      extra: message,
    };
  }

  const text = message.content
    .map((block) => (block.type === 'text' ? block.text : ''))
    .join('');

  if (!text) {
    return {
      success: false,
      reason: 'The Claude request responded with the empty response',
      extra: message,
    };
  }

  const parseResult = parseJson(text);
  if (parseResult.success === false) {
    return parseResult;
  }

  if (!isInternalAiAnalysis(parseResult.value)) {
    return {
      success: false,
      reason: 'The Claude request responded with the malformed response',
      extra: parseResult.value,
    };
  }

  return {
    success: true,
    value: sanitizeAiAnalyseResult(
      sourceLanguage,
      partOfSpeech,
      convertInternalToExternal(parseResult.value)
    ),
  };
};

export const claudeAnalyse = async (
  payload: AiAnalysePayload
): Promise<Result<AiAnalysis>> => {
  const client = new Anthropic({
    apiKey: config.claudeApiKey,
  });

  const abortController = new AbortController();

  const result = await resultify(
    timeout(
      // Fallbacks are not supported by the Batches API, so they're added only here.
      client.beta.messages.create(
        {
          ...getClaudeAnalyzeParams(payload),
          betas: ['server-side-fallback-2026-07-01'],
          fallbacks: 'default',
        },
        { signal: abortController.signal }
      ),
      abortController,
      10_000
    ),
    {
      reason: 'Unable to perform Claude analyse.',
      extra: { payload },
    }
  );

  if (result.success === false) {
    return result;
  }

  return handleClaudeAnalyzeResponse(result.value, payload);
};
