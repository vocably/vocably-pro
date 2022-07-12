import {
  AnalyzePayload,
  Result,
  Analysis,
  Translation,
  Language,
} from '@vocably/model';
import { translateText } from '../../translateText';
import { lexicala } from '../../lexicala';
import { languageToLexicalaLanguage } from '../../lexicala/lexicalaLanguageMapper';
import { lexicalaSearchResultToAnalysisItem } from '../../lexicala/lexicalaSearchResultToAnalysisItem';
import { trimArticle } from './trimArticle';

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
      items: await Promise.all(
        lexicalaResult.value.map(
          lexicalaSearchResultToAnalysisItem(translation)
        )
      ),
    },
  };
};
