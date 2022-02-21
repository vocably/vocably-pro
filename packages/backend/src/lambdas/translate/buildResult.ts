import {
  isLexicalaLanguage,
  Phrase,
  Result,
  Translation,
} from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { translateText } from '../../translateText';
import { analyze } from '../../lexicala';
import { extractUniqueHeadwords } from './extractUniqueHeadwords';
import { translateNormalizedHeadwords } from './translateNormalizedHeadwords';

export const buildResult = async (
  event: APIGatewayProxyEvent
): Promise<Result<Translation>> => {
  const phrase: Phrase = JSON.parse(event.body);

  if (!phrase || !phrase.phrase) {
    return {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_MISSING_PHRASE',
      reason: 'The translation phrase is missing.',
    };
  }

  if (phrase.language && !isLexicalaLanguage(phrase.language)) {
    return {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_UNAVAILABLE_REQUESTED_LANGUAGE',
      reason: `The REQUESTED source language (${phrase.language}) is not available.`,
    };
  }

  const translationResult = await translateText(phrase.phrase, phrase.language);

  if (translationResult.success === false) {
    return translationResult;
  }

  const language = phrase.language ?? translationResult.value.detectedLanguage;

  if (!isLexicalaLanguage(language)) {
    return {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_UNAVAILABLE_DETECTED_LANGUAGE',
      reason: `The DETECTED source language (${phrase.language}) is not available.`,
    };
  }

  const lexicalaResult = await analyze(language, phrase.phrase);

  if (lexicalaResult.success === false) {
    return lexicalaResult;
  }

  const normalizedHeadwords = extractUniqueHeadwords(lexicalaResult.value);

  return {
    success: true,
    value: {
      text: translationResult.value.text,
      language,
      lexicala: lexicalaResult.value,
      normalized: await translateNormalizedHeadwords(
        normalizedHeadwords,
        language,
        translationResult.value
      ),
    },
  };
};
