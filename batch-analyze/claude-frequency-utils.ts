import type Anthropic from '@anthropic-ai/sdk';
import { parseJson } from '@vocably/api';
import { type GoogleLanguage, languageList, type Result } from '@vocably/model';
import { isSafeObject } from '@vocably/sulna';
import { createHash } from 'node:crypto';

// Copied from @vocably/analyze (unitOfSpeechAnalyse.ts) for the one-time
// frequency backfill, so the scale matches the live analysis.
const MIN_FREQUENCY = 1;
const MAX_FREQUENCY = 10;

const CLAUDE_MODEL = 'claude-sonnet-5-5';

const getFrequencyPrompt = (
  languageName: string,
  partOfSpeech: string
): string =>
  `how commonly the ${partOfSpeech} is used in everyday ${languageName}. Integer from ${MIN_FREQUENCY} (rare, specialized or archaic) to ${MAX_FREQUENCY} (one of the most common words)`;

export const sanitizeFrequency = (value: unknown): number | undefined => {
  const numericValue =
    typeof value === 'string' && value.trim() !== '' ? Number(value) : value;

  if (typeof numericValue !== 'number' || !Number.isFinite(numericValue)) {
    return undefined;
  }

  return Math.min(
    MAX_FREQUENCY,
    Math.max(MIN_FREQUENCY, Math.round(numericValue))
  );
};

export type FrequencyPayload = {
  source: string;
  partOfSpeech: string;
  sourceLanguage: GoogleLanguage;
};

// Only the language, the word and its part of speech are considered,
// so the rating doesn't depend on previously generated definitions.
const getClaudeFrequencyParams = ({
  source,
  partOfSpeech,
  sourceLanguage,
}: FrequencyPayload): Anthropic.MessageCreateParamsNonStreaming => {
  const languageName = languageList[sourceLanguage];

  return {
    model: CLAUDE_MODEL,
    max_tokens: 4096,
    output_config: {
      effort: 'low',
      format: {
        type: 'json_schema',
        schema: {
          type: 'object',
          properties: {
            frequency: {
              type: 'integer',
              description: getFrequencyPrompt(languageName, partOfSpeech),
            },
          },
          required: ['frequency'],
          additionalProperties: false,
        },
      },
    },
    system: [
      `You are a ${languageName} word frequency dictionary.`,
      `User provides a ${partOfSpeech} in ${languageName}.`,
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
const getClaudeFrequencyBatchItemKey = (payload: FrequencyPayload): string =>
  createHash('sha256')
    .update(
      JSON.stringify({
        sourceLanguage: payload.sourceLanguage,
        partOfSpeech: payload.partOfSpeech,
        source: payload.source,
      })
    )
    .digest('hex');

export const getClaudeFrequencyBatchItem = (
  payload: FrequencyPayload
): Anthropic.Messages.BatchCreateParams.Request => {
  return {
    custom_id: getClaudeFrequencyBatchItemKey(payload),
    params: getClaudeFrequencyParams(payload),
  };
};

export const handleClaudeFrequencyResponse = (
  message: Anthropic.Message
): Result<number> => {
  if (
    message.stop_reason === 'refusal' ||
    message.stop_reason === 'max_tokens'
  ) {
    return {
      success: false,
      reason: `Claude frequency stopped with reason "${message.stop_reason}".`,
      extra: message,
    };
  }

  const text = message.content
    .map((block) => (block.type === 'text' ? block.text : ''))
    .join('');

  const parseResult = parseJson(text);
  if (!parseResult.success) {
    return parseResult;
  }

  const frequency = isSafeObject(parseResult.value)
    ? sanitizeFrequency(parseResult.value['frequency'])
    : undefined;

  if (frequency === undefined) {
    return {
      success: false,
      reason: 'The Claude response contains no valid frequency.',
      extra: text,
    };
  }

  return {
    success: true,
    value: frequency,
  };
};
