import { chatGptRequest, GPT_4O_MINI } from '@vocably/lambda-shared';
import {
  GenerateMnemonicPayload,
  GenerateMnemonicResult,
  languageList,
  Result,
} from '@vocably/model';
import { trimLanguage } from '@vocably/sulna';

export const generateMnemonic = async (
  payload: GenerateMnemonicPayload
): Promise<Result<GenerateMnemonicResult>> => {
  const prompt = [
    `Generate a mnemonic rule to remember an ${trimLanguage(
      languageList[payload.sourceLanguage]
    )} ${payload.card.partOfSpeech || 'word'}`,
    `<word>`,
    payload.card.source,
    `</word>`,
    `Response in ${trimLanguage(languageList[payload.targetLanguage])}`,
    `Provide response in markdown.`,
  ].join('\n');

  const responseResult = await chatGptRequest({
    responseFormat: 'text',
    messages: [
      {
        role: 'system',
        content:
          'You are a smart language assistant. Only respond to questions about vocabulary and translations.',
      },
      { role: 'user', content: prompt },
    ],
    model: GPT_4O_MINI,
  });

  return responseResult;
};
