import {
  isLexicalaLanguage,
  AnalyzePayload,
  Result,
  Analysis,
} from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { translateText } from '../../translateText';
import { lexicala } from '../../lexicala';
import { extractUniqueHeadwords } from './extractUniqueHeadwords';
import { translateNormalizedHeadwords } from './translateNormalizedHeadwords';

export const buildResult = async (
  event: APIGatewayProxyEvent
): Promise<Result<Analysis>> => {
  const payload: AnalyzePayload = JSON.parse(event.body);

  if (!payload || !payload.source) {
    return {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_MISSING_PHRASE',
      reason: 'The translation phrase is missing.',
    };
  }

  if (payload.sourceLanguage && !isLexicalaLanguage(payload.sourceLanguage)) {
    return {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_UNAVAILABLE_REQUESTED_LANGUAGE',
      reason: `The REQUESTED source language (${payload.sourceLanguage}) is not available.`,
    };
  }

  const translationResult = await translateText(
    payload.source,
    payload.sourceLanguage
  );

  if (translationResult.success === false) {
    return translationResult;
  }

  const sourceLanguage =
    payload.sourceLanguage ?? translationResult.value.sourceLanguage;

  if (!isLexicalaLanguage(sourceLanguage)) {
    return {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_UNAVAILABLE_DETECTED_LANGUAGE',
      reason: `The DETECTED source language (${sourceLanguage}) is not available.`,
    };
  }

  const lexicalaResult = await lexicala(sourceLanguage, payload.source);

  if (lexicalaResult.success === false) {
    return lexicalaResult;
  }

  const normalizedHeadwords = extractUniqueHeadwords(lexicalaResult.value);

  return {
    success: true,
    value: {
      source: payload.source,
      translation: translationResult.value,
      lexicala: lexicalaResult.value,
      normalized: await translateNormalizedHeadwords(
        normalizedHeadwords,
        sourceLanguage,
        translationResult.value
      ),
    },
  };
};
