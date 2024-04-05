import {
  GoogleLanguage,
  languageList,
  Result,
  resultify,
  Translation,
} from '@vocably/model';
import { getEncoding, getEncodingNameForModel } from 'js-tiktoken';
import OpenAI from 'openai';

const OPENAI_MODEL = 'gpt-3.5-turbo';
const openai = new OpenAI();
const tokenCodec = getEncoding(getEncodingNameForModel(OPENAI_MODEL));

type Payload = {
  source: string;
  context: string;
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
};

type ContextTranslation = {
  target: string;
};

const isContextTranslation = (o: any): o is ContextTranslation => {
  return !(!o || !o.target);
};

export const isContextPayload = (o: any): o is Payload => {
  return !(
    !o ||
    !o.source ||
    !o.context ||
    !o.sourceLanguage ||
    !o.targetLanguage
  );
};

export const translateFromContext = async (
  payload: Payload
): Promise<Result<Translation>> => {
  const promptContent = createPrompt(payload);

  const completionResult = await resultify(
    openai.chat.completions.create({
      messages: [{ role: 'user', content: promptContent }],
      model: OPENAI_MODEL,
      temperature: 0,
      top_p: 0,
    }),
    {
      errorCode: 'OPENAI_UNSUCCESSFUL_REQUEST',
      reason: 'Unable to perform request to OpenAI',
    }
  );

  console.log(
    `Sent prompt ${promptContent}. Analyzer responded with: ${JSON.stringify(
      completionResult
    )}`
  );

  if (completionResult.success === false) {
    return completionResult;
  }

  let response: unknown;
  try {
    response = JSON.parse(completionResult.value.choices[0].message.content);
  } catch (e) {
    return {
      success: false,
      errorCode: 'OPENAI_UNABLE_TO_PARSE_RESPONSE',
      reason: `Failed to parse analyzer's response as JSON: ${e}`,
    };
  }

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
    },
  };
};

const truncateText = (text: string, maxTokens = 100): string => {
  const tokens = tokenCodec
    .encode(text)
    .map((token: number): string => tokenCodec.decode([token]));
  tokens.splice(maxTokens);
  return tokens.join('');
};

const createPrompt = (payload: Payload): string => {
  const source = truncateText(payload.source, 10);
  const context = truncateText(payload.context, 50);
  return [
    `Translate the word "${source}" in context of sentence "${context}" from ${
      languageList[payload.sourceLanguage]
    } into ${languageList[payload.targetLanguage]}.`,
    '',
    `Respond in JSON, as in example: {"target": "translated word"}`,
  ].join('\n');
};
