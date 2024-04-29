import { AnalysisItem, Translation } from '@vocably/model';
import { joinStrings } from './joinStrings';
import { trimArticle } from './trimArticle';

const sourcesAreMatched =
  (translation: Translation) =>
  (item: AnalysisItem): boolean => {
    const sourcesAreMatched =
      trimArticle(
        translation.sourceLanguage,
        translation.source
      ).source.toLowerCase() ===
      trimArticle(translation.sourceLanguage, item.source).source.toLowerCase();
    return (
      sourcesAreMatched &&
      (translation.partOfSpeech === undefined ||
        translation.partOfSpeech === item.partOfSpeech)
    );
  };

const translationsAreMatched =
  (translation: Translation) => (analysisItem: AnalysisItem) => {
    if (translation.sourceLanguage === translation.targetLanguage) {
      return true;
    }

    return analysisItem.translation
      .toLowerCase()
      .includes(translation.target.toLowerCase());
  };

export const prependTranslation = (
  analysisItems: AnalysisItem[],
  translation: Translation
): AnalysisItem[] => {
  const similarSources = analysisItems.filter(sourcesAreMatched(translation));
  const similarTranslations = similarSources.filter(
    translationsAreMatched(translation)
  );

  if (similarTranslations.length === 1 && similarSources.length === 1) {
    return analysisItems;
  }

  if (similarSources.length > 1) {
    return analysisItems;
  }

  if (similarSources.length === 1) {
    return analysisItems.map((item) => {
      if (item === similarSources[0]) {
        return {
          ...item,
          translation: joinStrings(
            [item.translation, translation.target].filter(Boolean),
            translation.targetLanguage
          ),
        };
      }
    });
  }

  return [
    {
      source: translation.source,
      translation: translation.target,
      partOfSpeech: translation.partOfSpeech,
      definitions: [],
      examples: [],
    },
    ...analysisItems,
  ];
};
