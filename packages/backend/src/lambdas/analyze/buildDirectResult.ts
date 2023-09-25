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
import { isOneWord } from './isOneWord';
import { trimArticle } from './trimArticle';
import { wordDictionary } from "../../word-dictionary";
import { wordDictionaryResultToAnalysisItems } from "./wordDictionaryResultToItems";

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

  if (!isOneWord(trimmedArticle.source)) {
    return {
      success: true,
      value: {
        source: payload.source,
        translation: translationResult.value,
      },
    };
  }

  const results = await Promise.all([
    lexicala(
      lexicalaLanguage,
      trimmedArticle.source
    ),
    lexicalaLanguage === 'en' ? wordDictionary(trimmedArticle.source) : null
  ]);

  const lexicalaResult = results[0];

  if (lexicalaResult.success === false || lexicalaResult.value.length === 0) {
    if (lexicalaResult.success === false) {
      console.error('Lexicala error', lexicalaResult);
    }

    if (results[1] === null) {
      return {
        success: true,
        value: {
          source: payload.source,
          translation: translationResult.value,
        },
      };
    }

    if (results[1].success === false) {
      console.error('Word dictionary error', results[1]);
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
        items: await Promise.all(wordDictionaryResultToAnalysisItems({
          result: results[1].value,
          payload,
          originalTranslation: translation
        })),
      }
    }
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
