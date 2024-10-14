import { isItem } from '@vocably/crud';
import { TranslationCards } from '@vocably/model';

export const getSelectedTagIds = (
  translationCards: TranslationCards,
  cardId: string
): string[] => {
  const card = translationCards.cards.find(
    (card) => isItem(card) && card.id === cardId
  );

  if (!card) {
    return [];
  }

  return card.data.tags.map((tag) => tag.id);
};
