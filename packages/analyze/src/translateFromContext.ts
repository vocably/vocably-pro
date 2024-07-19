import {
  ChatGPTLanguage,
  ChatGPTLanguages,
  GoogleLanguage,
  languageList,
  Result,
  Translation,
} from '@vocably/model';
import { tokenize } from '@vocably/sulna';
import { chatGptRequest, CHAT_GPT_4O_MINI } from './chatGptRequest';
import { isOneWord } from './isOneWord';

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
  const prompt = createPrompt(payload);
  const responseResult = await chatGptRequest({
    prompt,
    model: CHAT_GPT_4O_MINI,
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

const truncateText = (text: string, maxTokens = 100): string => {
  return tokenize(text).slice(0, maxTokens).join(' ');
};

const createPrompt = (payload: Payload): string => {
  const source = truncateText(payload.source, 10);
  const context = truncateText(payload.context, 50);

  const isOnwWord = isOneWord(source);

  return [
    `Translate the ${languageList[payload.sourceLanguage]} word`,
    source,
    `that appears in the context of sentence:`,
    context,
    `from ${languageList[payload.sourceLanguage]} to ${
      languageList[payload.targetLanguage]
    }.`,
    '',
    `Respond in JSON, as in example: {"target": "the translated word"${
      isOnwWord && ', "partOfSpeech": "noun"'
    }}`,
  ].join('\n');
};
