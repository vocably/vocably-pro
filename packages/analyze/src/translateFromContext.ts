import {
  ChatGPTLanguage,
  ChatGPTLanguages,
  GoogleLanguage,
  languageList,
  Result,
  Translation,
} from '@vocably/model';
import { tokenize } from '@vocably/sulna';
import { chatGptRequest, GPT_4O_MINI } from './chatGptRequest';

type Payload = {
  source: string;
  context: string;
  sourceLanguage: ChatGPTLanguage;
  targetLanguage: GoogleLanguage;
};

type ContextTranslation = {
  target: string;
  partOfSpeech?: string;
};

const isContextTranslation = (o: any): o is ContextTranslation => {
  return !(!o || !o.target);
};

export const isContextPayload = (o: any): o is Payload => {
  return (
    !(
      !o ||
      !o.source ||
      !o.context ||
      !o.sourceLanguage ||
      !o.targetLanguage
    ) && ChatGPTLanguages.includes(o.sourceLanguage)
  );
};

export const itMakesSense = (p: Payload): boolean => {
  const source = tokenize(p.source);
  const context = tokenize(p.context);

  if (source.length === 0 || context.length === 0) {
    return false;
  }

  if (source.length > 3) {
    return false;
  }

  return true;
};

export const translateFromContext = async (
  payload: Payload
): Promise<Result<Translation>> => {
  const source = truncateAsIs(payload.source, 100);
  const context = truncateAsIs(payload.context, 400);

  const prompt = [
    `Translate the ${languageList[payload.sourceLanguage]} word/phrase`,
    `<word-or-phrase>${source}</word-or-phrase>`,
    `that appears in the context of sentence:`,
    `<sentence>${context}</sentence>`,
    `from ${languageList[payload.sourceLanguage]} to ${
      languageList[payload.targetLanguage]
    }.`,
    '',
    `Respond in JSON, as in example: {"target": "the translated word", "partOfSpeech": "noun"'}`,
  ].join('\n');

  const responseResult = await chatGptRequest({
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

  if (!responseResult.success) {
    return responseResult;
  }

  const response = responseResult.value;

  if (!isContextTranslation(response)) {
    return {
      success: false,
      errorCode: 'OPENAI_UNEXPECTED_RESPONSE',
      reason: `Unexpected response from analyzer: ${JSON.stringify(response)}`,
    };
  }

  return {
    success: true,
    value: {
      source: payload.source,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      target: response.target,
      partOfSpeech: response.partOfSpeech,
    },
  };
};

export const truncateAsIs = (text: string, length: number): string => {
  return text.replace(/[<>]/gm, '').slice(0, length);
};
