import { ChatGPTLanguage, languageList, Result } from '@vocably/model';
import { tokenize } from '@vocably/sulna';
import { chatGptRequest, GPT_4O_MINI } from './chatGptRequest';
import { enrichSource } from './translateDefinitions/enrichSource';

type ChatGptResponse = {
  translations: string[];
};

const isChatGptResponse = (o: any): o is ChatGptResponse => {
  if (!o) {
    return false;
  }

  if (!o.translations) {
    return false;
  }

  if (!Array.isArray(o.translations)) {
    return false;
  }

  return o.translations.every((t: any) => typeof t === 'string');
};

type Options = {
  sourceLanguage: ChatGPTLanguage;
  targetLanguage: ChatGPTLanguage;
  partOfSpeech: string;
  source: string;
  definitions: string[];
};
export const translateDefinitions = async ({
  sourceLanguage,
  targetLanguage,
  source,
  partOfSpeech,
  definitions,
}: Options): Promise<Result<string[]>> => {
  const safeSource = tokenize(source).join(' ');
  const safeDefinitions = definitions.map((definition) =>
    tokenize(definition).join(' ')
  );
  const safeSourceLanguage = languageList[sourceLanguage];
  const safeTargetLanguage = languageList[targetLanguage];

  const translationsExamples = safeDefinitions.map(
    (_, index) => `translation${index + 1}`
  );

  const prompt = [
    `Translate the ${safeSourceLanguage} ${partOfSpeech} "${enrichSource(
      safeSource,
      partOfSpeech,
      sourceLanguage
    )}" into ${safeTargetLanguage}`,
    `Each translation should be one word or two words in ${safeTargetLanguage} and consider the following definitions:`,
    `[`,
    safeDefinitions.map((def) => `  "${def}"`).join(',\n'),
    `]`,
    ``,
    `Respond in JSON, as in example: {"translations": ${JSON.stringify(
      translationsExamples
    )}`,
  ].join('\n');

  const result = await chatGptRequest({ prompt, model: GPT_4O_MINI });

  if (result.success === false) {
    return result;
  }

  const response = result.value;

  if (!isChatGptResponse(response)) {
    return {
      success: false,
      errorCode: 'OPENAI_UNEXPECTED_RESPONSE',
      reason: 'Invalid response from the chatGPT model',
    };
  }

  return {
    success: true,
    value: response.translations.reduce(
      (acc: string[], translation: string) => {
        if (acc.includes(translation)) {
          return acc;
        }

        return [...acc, translation];
      },
      []
    ),
  };
};
