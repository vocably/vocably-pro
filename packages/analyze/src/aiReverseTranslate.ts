import {
  GoogleLanguage,
  languageList,
  Result,
  Translation,
} from '@vocably/model';
import { isArray, isObject } from 'lodash-es';
import { chatGptRequest, GPT_4O_MINI } from './chatGptRequest';
import { truncateText } from './translateFromContext';

type Payload = {
  target: string;
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
};

type AiTranslationVariant = {
  translation: string;
  partOfSpeech: string;
};

type AiTranslationResult = {
  translations: [AiTranslationVariant, ...AiTranslationVariant[]];
};

type ValidTranslations = [Translation, ...Translation[]];

export const aiReverseTranslate = async (
  payload: Payload
): Promise<Result<ValidTranslations>> => {
  const target = truncateText(payload.target, 10);
  const prompt = [
    `Provide all the possible translations of the ${
      languageList[payload.targetLanguage]
    } word/phrase`,
    `<input>${target}</input>`,
    `into ${languageList[payload.sourceLanguage]}.`,
    `For each translation provide part of speech in English`,
    '',
    `Respond in JSON, as in example: ${JSON.stringify({
      translations: [
        { translation: 'word 1', partOfSpeech: 'noun' },
        { translation: 'word 2', partOfSpeech: 'noun' },
      ],
    })}`,
  ].join('\n');

  const responseResult = await chatGptRequest({
    prompt,
    model: GPT_4O_MINI,
  });

  if (!responseResult.success) {
    return responseResult;
  }

  const translationData = responseResult.value;

  if (!isValidResult(translationData)) {
    return {
      success: false,
      errorCode: 'OPENAI_UNEXPECTED_RESPONSE',
      reason: `The provided result is not an array of valid AiTranslationVariant objects`,
      extra: translationData,
    };
  }

  const translations = translationData.translations
    .map(sanitizeTranslationVariant(payload))
    .map((translationVariant) => ({
      source: payload.target,
      sourceLanguage: payload.targetLanguage,
      targetLanguage: payload.sourceLanguage,
      target: translationVariant.translation,
      partOfSpeech: translationVariant.partOfSpeech,
    }));

  return {
    success: true,
    value: [translations[0], ...translations.slice(1)],
  };
};

const isValidResult = (result: any): result is AiTranslationResult => {
  if (!isObject(result)) {
    return false;
  }

  if (!('translations' in result) || !isArray(result['translations'])) {
    return false;
  }

  return (
    result['translations'].length > 0 &&
    result['translations'].every(isTranslationVariant)
  );
};

const isTranslationVariant = (data: any): data is AiTranslationVariant => {
  return (
    isObject(data) &&
    typeof data['translation'] === 'string' &&
    typeof data['partOfSpeech'] === 'string'
  );
};

const sanitizeTranslationVariant =
  (payload: Payload) =>
  (translationVariant: AiTranslationVariant): AiTranslationVariant => {
    if (
      payload.sourceLanguage === 'en' &&
      translationVariant.partOfSpeech === 'verb'
    ) {
      return {
        ...translationVariant,
        translation: translationVariant.translation.replace(/to /i, ''),
      };
    }

    return translationVariant;
  };
