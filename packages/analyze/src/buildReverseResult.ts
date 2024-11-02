import {
  AnalysisItem,
  DirectAnalysis,
  GoogleLanguage,
  Result,
  ReverseAnalysis,
  ReverseAnalyzePayload,
  Translation,
  ValidAnalysisItems,
} from '@vocably/model';
import { buildDirectResult } from './buildDirectResult';
import { makeUniqueItems } from './makeUniqueItems';
import { reverseTranslate } from './reverseTranslate';
import { sortByTarget } from './sortByTarget';

type TranslationDirectResult = {
  translation: Translation;
  directTranslationResult: Result<DirectAnalysis>;
};

export const buildReverseResult = async (
  payload: ReverseAnalyzePayload
): Promise<Result<ReverseAnalysis>> => {
  const translationResults = await reverseTranslate(payload);

  if (translationResults.success === false) {
    return translationResults;
  }

  const directResults = await Promise.all(
    translationResults.value.map(
      async (translation): Promise<TranslationDirectResult> => {
        return {
          translation,
          directTranslationResult: await buildDirectResult({
            payload: {
              source: translation.target,
              target: languagesWithTarget.includes(payload.sourceLanguage)
                ? translation.source
                : undefined,
              sourceLanguage: payload.sourceLanguage,
              targetLanguage: payload.targetLanguage,
              partOfSpeech: translation.partOfSpeech,
            },
            lexicalaParams: {
              morph: 'false',
              analyzed: 'false',
            },
          }),
        };
      }
    )
  );

  const translationItems = builtTranslationItems([
    directResults[0],
    ...directResults.slice(1),
  ]);

  return {
    success: true,
    value: {
      target: payload.target,
      source: directResults[0].translation.target,
      translation: {
        source: directResults[0].translation.target,
        sourceLanguage: payload.sourceLanguage,
        target: payload.target,
        targetLanguage: payload.targetLanguage,
        partOfSpeech: directResults[0].translation.partOfSpeech,
      },
      reverseTranslations: translationResults.value,
      items: makeUniqueItems(translationItems).sort(
        sortByTarget(payload.target)
      ),
    },
  };
};

const builtTranslationItems = (
  translationDirectResults: [
    TranslationDirectResult,
    ...TranslationDirectResult[]
  ]
): ValidAnalysisItems => {
  const results = translationDirectResults.flatMap((result): AnalysisItem[] => {
    if (result.directTranslationResult.success) {
      return result.directTranslationResult.value.items;
    }

    return [
      {
        source: result.translation.target,
        translation: result.translation.source,
        partOfSpeech: result.translation.partOfSpeech,
        definitions: [],
      },
    ];
  });

  return [results[0], ...results.slice(1)];
};

// We can't rely on Google Translate for these languages, thus,
// it's better to provide the AI translation as a direct target
// for the rest of the languages, it should be fine.
const languagesWithTarget: GoogleLanguage[] = ['ja', 'zh', 'zh-TW', 'ko'];
