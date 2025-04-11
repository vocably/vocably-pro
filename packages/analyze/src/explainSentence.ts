import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import { GoogleLanguage, languageList, Result } from '@vocably/model';
import { isSafeObject, trimLanguage } from '@vocably/sulna';
import { isString } from 'lodash-es';

type ExplainSentencePayload = {
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  sentence: string;
};

export type Explanation = {
  explanation: string;
};

const isExplanation = (variable: any): variable is Explanation => {
  return isSafeObject(variable) && isString(variable['explanation']);
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
        content: `You are a helpful and knowledgeable language tutor. A user is learning ${trimLanguage(
          languageList[sourceLanguage]
        )}.`,
      },
      {
        role: 'system',
        content: [
          `Shortly explain what to pay attention to for proper understanding of the submitted sentence.`,
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
