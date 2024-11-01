import {
  DirectAnalysis,
  DirectAnalyzePayload,
  Result,
  Translation,
} from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { buildDirectJapaneseResult } from './buildDirectResult/buildDirectJapaneseResult';
import { combineItems } from './combineItems';
import { filterOutByPartOfSpeech } from './filterOutByPartOfSpeech';
import { fitsTheSize } from './fitsTheSize';
import { isOneWord } from './isOneWord';
import { lexicala, LexicalaOverriddenParams } from './lexicala';
import { languageToLexicalaLanguage } from './lexicala/lexicalaLanguageMapper';
import { lexicalaSearchResultToAnalysisItem } from './lexicala/lexicalaSearchResultToAnalysisItem';
import { normalizeHeadword } from './lexicala/normalizeHeadword';
import { lexicalaItemHasDefinitionOrCanBeTranslated } from './lexicalaItemHasDefinitionOrCanBeTranslated';
import { prependTranslation } from './prependTranslation';
import { sortByRelevance } from './sortByRelevance';
import { translate } from './translate';
import { translationToAnalysisItem } from './translationToAnalyzeItem';
import { wordDictionary } from './word-dictionary';
import { wordDictionaryResultToAnalysisItems } from './wordDictionaryResultToItems';

type Options = {
  payload: DirectAnalyzePayload;
  lexicalaParams?: LexicalaOverriddenParams;
};

export const buildDirectResult = async ({
  payload,
  lexicalaParams,
}: Options): Promise<Result<DirectAnalysis>> => {
  const translationResult = await translate(payload);

  if (translationResult.success === false) {
    return translationResult;
  }

  const translation: Translation = {
    ...translationResult.value,
    sourceLanguage:
      payload.sourceLanguage ?? translationResult.value.sourceLanguage,
  };

  if (translation.sourceLanguage === 'ja') {
    return buildDirectJapaneseResult({ translation });
  }

  const lexicalaLanguage = languageToLexicalaLanguage(
    translation.sourceLanguage
  );

  if (lexicalaLanguage === null) {
    return {
      success: true,
      value: {
        source: payload.source,
        translation: translationResult.value,
        items: [translationToAnalysisItem(translation)],
      },
    };
  }

  const trimmedArticle = trimArticle(
    translation.sourceLanguage,
    payload.source
  );

  if (!isOneWord(trimmedArticle.source)) {
    return {
      success: true,
      value: {
        source: payload.source,
        translation: translationResult.value,
        items: [translationToAnalysisItem(translation)],
      },
    };
  }

  const results = await Promise.all([
    lexicala(lexicalaLanguage, trimmedArticle.source, lexicalaParams),
    lexicalaLanguage === 'en' ? wordDictionary(trimmedArticle.source) : null,
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
          items: prependTranslation([], translationResult.value),
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
          items: prependTranslation([], translationResult.value),
        },
      };
    }

    return {
      success: true,
      value: {
        source: payload.source,
        translation: translationResult.value,
        items: prependTranslation(
          await Promise.all(
            wordDictionaryResultToAnalysisItems({
              result: results[1].value,
              payload,
              originalTranslation: translation,
            })
          ),
          translation
        ),
      },
    };
  }

  return {
    success: true,
    value: {
      source: payload.source,
      translation: translationResult.value,
      items: prependTranslation(
        (
          await Promise.all(
            filterOutByPartOfSpeech(
              lexicalaResult.value
                .map(normalizeHeadword(payload.source))
                .filter(fitsTheSize(payload.source))
                .filter(
                  lexicalaItemHasDefinitionOrCanBeTranslated(translation)
                ),
              payload.partOfSpeech
            ).map(lexicalaSearchResultToAnalysisItem(translation))
          )
        )
          .reduce(combineItems, [])
          .sort(sortByRelevance(translation)),
        translation
      ),
    },
  };
};
