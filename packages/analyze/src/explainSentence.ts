import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import { GoogleLanguage, languageList, Result } from '@vocably/model';
import { trimLanguage } from '@vocably/sulna';
import { isObject, isString } from 'lodash-es';

type ExplainSentencePayload = {
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  sentence: string;
};

export type Explanation = {
  explanation: string;
};

const isExplanation = (variable: any): variable is Explanation => {
  return isObject(variable) && isString(variable['explanation']);
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
          `Briefly explain what to pay attention to for proper translation of ${trimLanguage(
            languageList[sourceLanguage]
          )} sentence into ${trimLanguage(languageList[targetLanguage])}.`,
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
          },
          required: ['explanation'],
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

  return responseResult;
};
