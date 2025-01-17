import {
  ChatGPTLanguage,
  GoogleLanguage,
  languageList,
  Result,
  Translation,
} from '@vocably/model';
import {
  AiTranslation,
  isAiTranslation,
  resultExamples,
} from './aiDirectTranslateConstants';
import { chatGptRequest, GPT_4O_MINI } from './chatGptRequest';

type Payload = {
  source: string;
  sourceLanguage: ChatGPTLanguage;
  targetLanguage: GoogleLanguage;
};

export const aiDirectTranslate = async (
  payload: Payload
): Promise<Result<Translation>> => {
  const source = truncateAsIs(payload.source, 100);

  const example: AiTranslation = resultExamples[payload.sourceLanguage][
    payload.targetLanguage
  ] ?? {
    source: 'hedgehog',
    translation: 'ёж',
    partOfSpeech: 'noun',
  };

  const diacriticMarks = !['en', 'nl'].includes(payload.sourceLanguage)
    ? ', fix diacritic marks'
    : '';

  const prompt = [
    `Translate the ${languageList[payload.sourceLanguage]} word/phrase`,
    `<word-or-phrase>${source}</word-or-phrase>`,
    `into ${languageList[payload.targetLanguage]}.`,
    `Provide the part of speech, correct spelling, preserve punctuation${diacriticMarks}.`,
    '',
    `Respond in JSON, as in example: ${JSON.stringify(example)}`,
  ].join('\n');

  const responseResult = await chatGptRequest({
    messages: [
      {
        role: 'system',
        content: `You are a ${languageList[payload.sourceLanguage]}-${
          languageList[payload.targetLanguage]
        } dictionary.`,
      },
      { role: 'user', content: prompt },
    ],
    model: GPT_4O_MINI,
  });

  if (!responseResult.success) {
    return responseResult;
  }

  const response = responseResult.value;

  if (!isAiTranslation(response)) {
    return {
      success: false,
      errorCode: 'OPENAI_UNEXPECTED_RESPONSE',
      reason: `Unexpected response from analyzer: ${JSON.stringify(response)}`,
    };
  }

  return {
    success: true,
    value: {
      source: response.source,
      target: response.translation,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      partOfSpeech: response.partOfSpeech,
    },
  };
};

export const truncateAsIs = (text: string, length: number): string => {
  return text.replace(/[<>]/gm, '').slice(0, length);
};
