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
          'You are a language learning assistant helping language student to analyse a sentence',
      },
      {
        role: 'system',
        content: [
          `Shortly explain what to pay attention to for proper translation of ${trimLanguage(
            languageList[sourceLanguage]
          )} sentence into ${trimLanguage(languageList[targetLanguage])}.`,
          `Provide explanation in ${trimLanguage(
            languageList[targetLanguage]
          )}'`,
        ].join('\n'),
      },
      {
        role: 'user',
        content: sentence,
      },
    ],
    responseFormat: {
      type: 'text',
    },
    model: GPT_4O,
  });

  if (responseResult.success === false) {
    return responseResult;
  }

  return {
    success: true,
    value: {
      explanation: responseResult.value,
    },
  };
};
