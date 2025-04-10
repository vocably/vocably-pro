import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import { GoogleLanguage, languageList, Result } from '@vocably/model';
import { trimLanguage } from '@vocably/sulna';
import { isBoolean, isObject, isString } from 'lodash-es';

type ExplainSentencePayload = {
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  sentence: string;
};

type SentenceMember = {
  source: string;
  partOfSpeech: string;
  isTranslatable: boolean;
  translation: string;
};

export type Explanation = {
  explanation: string;
  sentenceMembers: SentenceMember[];
};

const isSentenceMember = (variable: any): variable is SentenceMember => {
  return (
    isObject(variable) &&
    isString(variable['source']) &&
    isString(variable['partOfSpeech']) &&
    isString(variable['translation']) &&
    isBoolean(variable['isTranslatable'])
  );
};

const isExplanation = (variable: any): variable is Explanation => {
  return (
    isObject(variable) &&
    isString(variable['explanation']) &&
    Array.isArray(variable['sentenceMembers']) &&
    variable['sentenceMembers'].every(isSentenceMember)
  );
};

export const explainSentence = async ({
  targetLanguage,
  sourceLanguage,
  sentence,
}: ExplainSentencePayload): Promise<Result<Explanation>> => {
  const responseResult = await chatGptRequest({
    messages: [
      {
        role: 'system',
        content:
          'You are a language learning assistant helping upper-intermediate language student to analyse a sentence',
      },
      {
        role: 'system',
        content: [
          `Explain what to pay attention to for proper translation of ${trimLanguage(
            languageList[sourceLanguage]
          )} sentence into ${trimLanguage(languageList[targetLanguage])}.`,
          `- Extract difficult sentence members, idiomatic phrases and interesting words`,
          `- Lowercase`,
          `Provide explanation in ${trimLanguage(
            languageList[targetLanguage]
          )}.'`,
        ].join('\n'),
      },
      {
        role: 'user',
        content: sentence,
      },
    ],
    responseFormat: {
      type: 'json_schema',
      json_schema: {
        name: 'SentenceAnalysis',
        description:
          'Sentence analysis, idiomatic phrases and words worth remembering and their parts of speech for each of them.',
        schema: {
          $schema: 'http://json-schema.org/draft-07/schema#',
          type: 'object',
          properties: {
            explanation: { type: 'string' },
            sentenceMembers: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  source: { type: 'string' },
                  partOfSpeech: { type: 'string' },
                  translation: { type: 'string' },
                  isTranslatable: { type: 'boolean' },
                },
                required: [
                  'source',
                  'partOfSpeech',
                  'translation',
                  'isTranslatable',
                ],
                additionalProperties: false,
              },
            },
          },
          required: ['explanation', 'sentenceMembers'],
          additionalProperties: false,
        },
      },
    },
    model: GPT_4O,
  });

  if (responseResult.success === false) {
    return responseResult;
  }

  if (!isExplanation(responseResult.value)) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason:
        'The provided ChatGPT response is not a valid explanation object.',
      extra: responseResult.value,
    };
  }

  return {
    ...responseResult,
    value: {
      ...responseResult.value,
      sentenceMembers: responseResult.value.sentenceMembers.map(
        (sentenceMember) => ({
          ...sentenceMember,
          partOfSpeech: sentenceMember.partOfSpeech.toLowerCase(),
        })
      ),
    },
  };
};
