import {
  GoogleLanguage,
  languageList,
  Result,
  resultify,
  Translation,
} from '@vocably/model';
import { getOpenAiClient } from './openAiClient';
import { tokenize } from './tokenize';

const OPENAI_MODEL = 'gpt-3.5-turbo';

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
  const openai = await getOpenAiClient();
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
  return tokenize(text).slice(0, maxTokens).join(' ');
};

const createPrompt = (payload: Payload): string => {
  const source = truncateText(payload.source, 10);
  const context = truncateText(payload.context, 50);

  return [
    `Translate the ${languageList[payload.sourceLanguage]} word`,
    source,
    `that appears in the context of sentence:`,
    context,
    `from ${languageList[payload.sourceLanguage]} to ${
      languageList[payload.targetLanguage]
    }.`,
    '',
    `Respond in JSON, as in example: {"target": "the translated word"}`,
  ].join('\n');
};
