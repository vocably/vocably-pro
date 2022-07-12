import {
  AnalyzePayload,
  Result,
  Analysis,
  Translation,
  Language,
} from '@vocably/model';
import { translateText } from '../../translateText';
import { lexicala } from '../../lexicala';
import { extractUniqueHeadwords } from './extractUniqueHeadwords';
import { translateNormalizedHeadwords } from './translateNormalizedHeadwords';
import { languageToLexicalaLanguage } from '../../lexicala/lexicalaLanguageMapper';
import { lexicalaSearchResultToAnalysisItem } from '../../lexicala/lexicalaSearchResultToAnalysisItem';

const targetLanguage: Language = 'en';

export const buildResult = async (
  payload: AnalyzePayload
): Promise<Result<Analysis>> => {
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
