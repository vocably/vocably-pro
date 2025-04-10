import {
  AnalysisItem,
  DirectAnalysis,
  DirectAnalyzePayload,
  isSuccess,
  Result,
  Translation,
} from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { buildDirectResultLegacy } from './buildDirectResultLegacy';
import { combineItems } from './combineItems';
import { explainSentence } from './explainSentence';
import { filterOutByPartOfSpeech } from './filterOutByPartOfSpeech';
import { fitsTheSize } from './fitsTheSize';
import { getWords } from './isOneWord';
import { isSingleWord as checkForASingleWord } from './isSingleWord';
import { lexicala, LexicalaOverriddenParams } from './lexicala';
import { languageToLexicalaLanguage } from './lexicala/lexicalaLanguageMapper';
import { lexicalaSearchResultToAnalysisItem } from './lexicala/lexicalaSearchResultToAnalysisItem';
import { normalizeHeadword } from './lexicala/normalizeHeadword';
import { lexicalaItemHasDefinitionOrCanBeTranslated } from './lexicalaItemHasDefinitionOrCanBeTranslated';
import { prependTranslation } from './prependTranslation';
import { sanitizePayload } from './sanitizePayload';
import { sortByRelevance } from './sortByRelevance';
import { translate } from './translate';
import { translationToAnalysisItem } from './translationToAnalyzeItem';
import { wordDictionary } from './word-dictionary';
import { wordDictionaryResultToAnalysisItems } from './wordDictionaryResultToItems';

type Options = {
  payload: DirectAnalyzePayload;
};

export const buildDirectResult = async ({
  payload: rawPayload,
}: Options): Promise<Result<DirectAnalysis>> => {
  if (['ja', 'zh', 'zh-TW'].includes(rawPayload.sourceLanguage)) {
    return buildDirectResultLegacy({ payload: rawPayload });
  }

  if (rawPayload.sourceLanguage === rawPayload.targetLanguage) {
    return buildDirectResultLegacy({ payload: rawPayload });
  }

  const payload = sanitizePayload(rawPayload);

  let translations: [Translation, ...Translation[]];
  let explanation: string = '';

  const isSingleWord = checkForASingleWord(payload);

  if (isSingleWord) {
    const translationResult = await translate(payload);
    if (translationResult.success === false) {
      return translationResult;
    }

    translations = [
      {
        ...translationResult.value,
        partOfSpeech:
          translationResult.value.partOfSpeech ?? payload.partOfSpeech,
        sourceLanguage:
          translationResult.value.sourceLanguage ?? payload.sourceLanguage,
      },
    ];
  } else {
    const [translationResult, explanationResult] = await Promise.all([
      translate(payload),
      explainSentence({
        sourceLanguage: payload.sourceLanguage,
        sentence: payload.source,
        targetLanguage: payload.targetLanguage,
      }),
    ]);

    if (translationResult.success === false) {
      return translationResult;
    }

    translations = [
      {
        ...translationResult.value,
        partOfSpeech:
          translationResult.value.partOfSpeech ?? payload.partOfSpeech,
        sourceLanguage:
          translationResult.value.sourceLanguage ?? payload.sourceLanguage,
      },
    ];

    if (explanationResult.success === true) {
      explanation = explanationResult.value.explanation;
      translations = [
        ...translations,
        ...explanationResult.value.sentenceMembers
          .filter((senteceMember) => senteceMember.isTranslatable)
          .map((sentenceMember) => ({
            source: sentenceMember.source,
            sourceLanguage: payload.sourceLanguage,
            target: sentenceMember.translation,
            targetLanguage: payload.targetLanguage,
            partOfSpeech: sentenceMember.partOfSpeech,
            comesFromExplanation: true,
          })),
      ];
    }
  }

  const lexicalaLanguage = languageToLexicalaLanguage(payload.sourceLanguage);

  const analyseTranslation = async (
    translation: Translation
  ): Promise<Result<AnalysisItem[]>> => {
    if (lexicalaLanguage === null) {
      return {
        success: true,
        value: [translationToAnalysisItem(translation)],
      };
    }

    if (translation.comesFromExplanation) {
      return {
        success: true,
        value: [translationToAnalysisItem(translation)],
      };
    }

    const trimmedArticle = trimArticle(
      translation.sourceLanguage,
      translation.source
    );

    if (
      translation.partOfSpeech &&
      (translation.partOfSpeech.includes('phrase') ||
        translation.partOfSpeech.includes('preposition'))
    ) {
      return {
        success: true,
        value: [translationToAnalysisItem(translation)],
      };
    }

    const numberOfWords = getWords(trimmedArticle.source).length;
    if (numberOfWords > 2) {
      return {
        success: true,
        value: [translationToAnalysisItem(translation)],
      };
    }

    let lexicalaParams: LexicalaOverriddenParams = {
      analyzed: 'true',
      morph: 'true',
    };

    if (numberOfWords > 1) {
      lexicalaParams = {
        analyzed: 'false',
        morph: 'false',
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
          value: prependTranslation([], translation),
        };
      }

      if (results[1].success === false) {
        console.error('Word dictionary error', results[1]);
        return {
          success: true,
          value: prependTranslation([], translation),
        };
      }

      return {
        success: true,
        value: prependTranslation(
          await Promise.all(
            wordDictionaryResultToAnalysisItems({
              result: results[1].value,
              payload,
              originalTranslation: translation,
            })
          ),
          translation
        ),
      };
    }

    return {
      success: true,
      value: prependTranslation(
        (
          await Promise.all(
            filterOutByPartOfSpeech(
              lexicalaResult.value
                .map(normalizeHeadword(translation.source))
                .filter(fitsTheSize(translation.source))
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
    };
  };

  const analyzeItems = (await Promise.all(translations.map(analyseTranslation)))
    .filter(isSuccess)
    .flatMap((result) => result.value);

  if (analyzeItems.length === 0) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'Unable to provide at least one sane result.',
    };
  }

  return {
    success: true,
    value: {
      source: payload.source,
      translation: translations[0],
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      explanation,
      items: [analyzeItems[0], ...analyzeItems.slice(1)],
    },
  };
};
