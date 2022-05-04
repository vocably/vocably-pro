import {
  AnalyzePayload,
  Result,
  Analysis,
  isLanguage,
  Translation,
  Language,
} from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { translateText } from '../../translateText';
import { lexicala } from '../../lexicala';
import { extractUniqueHeadwords } from './extractUniqueHeadwords';
import { translateNormalizedHeadwords } from './translateNormalizedHeadwords';
import { languageToLexicalaLanguage } from '../../lexicala/lexicalaLanguageMapper';
import { lexicalaSearchResultToAnalysisItem } from '../../lexicala/lexicalaSearchResultToAnalysisItem';

const targetLanguage: Language = 'en';

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

  if (payload.sourceLanguage && !isLanguage(payload.sourceLanguage)) {
    return {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_UNAVAILABLE_REQUESTED_LANGUAGE',
      reason: `The REQUESTED source language (${payload.sourceLanguage}) is not available.`,
    };
  }

  const translationResult = await translateText(
    payload.source,
    payload.sourceLanguage,
    targetLanguage
  );

  if (translationResult.success === false) {
    return translationResult;
  }

  const sourceLanguage =
    payload.sourceLanguage ?? translationResult.value.sourceLanguage;

  const lexicalaLanguage = languageToLexicalaLanguage(sourceLanguage);

  if (lexicalaLanguage === null) {
    return {
      success: true,
      value: {
        source: payload.source,
        translation: translationResult.value,
      },
    };
  }

  const lexicalaResult = await lexicala(lexicalaLanguage, payload.source);

  if (lexicalaResult.success === false) {
    console.error('Lexicala error', lexicalaResult);

    return {
      success: true,
      value: {
        source: payload.source,
        translation: translationResult.value,
      },
    };
  }

  let normalized: Translation[];

  if (sourceLanguage !== targetLanguage) {
    normalized = await translateNormalizedHeadwords(
      extractUniqueHeadwords(lexicalaResult.value),
      sourceLanguage,
      translationResult.value
    );
  }

  return {
    success: true,
    value: {
      source: payload.source,
      translation: translationResult.value,
      items: lexicalaResult.value.map(lexicalaSearchResultToAnalysisItem),
      normalized,
    },
  };
};
