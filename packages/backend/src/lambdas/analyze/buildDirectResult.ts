import {
  DirectAnalysis,
  DirectAnalyzePayload,
  Result,
  Translation,
} from '@vocably/model';
import { googleTranslate } from '../../googleTranslate';
import { lexicala } from '../../lexicala';
import { languageToLexicalaLanguage } from '../../lexicala/lexicalaLanguageMapper';
import { lexicalaSearchResultToAnalysisItem } from '../../lexicala/lexicalaSearchResultToAnalysisItem';
import { normalizeHeadword } from '../../lexicala/normalizeHeadword';
import { combineItems } from './combineItems';
import { fitsTheSize } from './fitsTheSize';
import { trimArticle } from './trimArticle';

export const buildDirectResult = async (
  payload: DirectAnalyzePayload
): Promise<Result<DirectAnalysis>> => {
  const translationResult = await googleTranslate(
    payload.source,
    payload.sourceLanguage,
    payload.targetLanguage
  );

  if (translationResult.success === false) {
    return translationResult;
  }

  const translation: Translation = {
    ...translationResult.value,
    sourceLanguage:
      payload.sourceLanguage ?? translationResult.value.sourceLanguage,
  };

  const lexicalaLanguage = languageToLexicalaLanguage(
    translation.sourceLanguage
  );

  if (lexicalaLanguage === null) {
    return {
      success: true,
      value: {
        source: payload.source,
        translation: translationResult.value,
      },
    };
  }

  const trimmedArticle = trimArticle(lexicalaLanguage, payload.source);
  const lexicalaResult = await lexicala(
    lexicalaLanguage,
    trimmedArticle.source
  );

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

  return {
    success: true,
    value: {
      source: payload.source,
      translation: translationResult.value,
      items: (
        await Promise.all(
          lexicalaResult.value
            .map(normalizeHeadword(payload.source))
            .filter(fitsTheSize(payload.source))
            .map(lexicalaSearchResultToAnalysisItem(translation))
        )
      ).reduce(combineItems, []),
    },
  };
};
