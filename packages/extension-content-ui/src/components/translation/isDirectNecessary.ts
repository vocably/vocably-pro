import { TranslationCards } from '@vocably/model';
import { trimArticle } from '@vocably/sulna';

export const isDirectNecessary = (analyse: TranslationCards): boolean => {
  if (
    analyse.translation.sourceLanguage === analyse.translation.targetLanguage
  ) {
    return false;
  }

  if (analyse.cards.length === 0) {
    return true;
  }

  const card = analyse.cards[0].data;

  if (
    analyse.source.toLowerCase() ===
      trimArticle(
        analyse.translation.sourceLanguage,
        card.source
      ).source.toLowerCase() &&
    analyse.translation.target === card.translation
  ) {
    return false;
  }

  return true;
};
