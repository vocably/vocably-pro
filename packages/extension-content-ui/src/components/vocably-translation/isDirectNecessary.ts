import { TranslationCards } from '@vocably/model';

export const isDirectNecessary = (analyse: TranslationCards): boolean => {
  if (
    analyse.translation.sourceLanguage === analyse.translation.targetLanguage
  ) {
    return false;
  }

  if (analyse.cards.length > 1) {
    return true;
  }

  const card = analyse.cards[0].data;

  if (
    analyse.source === card.source &&
    analyse.translation.target === card.translation
  ) {
    return false;
  }

  return true;
};
