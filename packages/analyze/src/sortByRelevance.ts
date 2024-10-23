import { AnalysisItem, Translation } from '@vocably/model';
import { trimArticle } from '@vocably/sulna';

const translationsAreMatched = (
  translation: Translation,
  item: AnalysisItem
): boolean => {
  return item.translation
    .toLowerCase()
    .includes(translation.target.toLowerCase());
};

export const sortByRelevance =
  (translation: Translation) => (a: AnalysisItem, b: AnalysisItem) => {
    const distilledTranslation = trimArticle(
      translation.sourceLanguage,
      translation.source
    ).source.toLowerCase();

    const distilledA = trimArticle(
      translation.sourceLanguage,
      a.source
    ).source.toLowerCase();

    if (
      distilledTranslation === distilledA &&
      translation.partOfSpeech === a.partOfSpeech
    ) {
      return -1;
    }

    const distilledB = trimArticle(
      translation.sourceLanguage,
      b.source
    ).source.toLowerCase();

    if (
      distilledTranslation === distilledB &&
      translation.partOfSpeech === b.partOfSpeech
    ) {
      return 1;
    }

    if (
      distilledTranslation.includes(distilledA) &&
      translation.partOfSpeech === a.partOfSpeech
    ) {
      return -1;
    }

    if (
      distilledTranslation.includes(distilledB) &&
      translation.partOfSpeech === b.partOfSpeech
    ) {
      return 1;
    }

    const translationAMatched = translationsAreMatched(translation, a);
    const translationBMatched = translationsAreMatched(translation, b);

    if (distilledTranslation === distilledA && translationAMatched) {
      return -1;
    }

    if (distilledTranslation === distilledB && translationBMatched) {
      return 1;
    }

    if (distilledTranslation.includes(distilledA) && translationAMatched) {
      return -1;
    }

    if (distilledTranslation.includes(distilledB) && translationBMatched) {
      return 1;
    }

    if (translation.partOfSpeech === a.partOfSpeech) {
      return -1;
    }

    if (translation.partOfSpeech === b.partOfSpeech) {
      return 1;
    }

    return 0;
  };
