import { Card, CardItem } from '@vocably/model';
import { byCard } from '@vocably/model-operations';

export const getAssociatedCardItem = (
  card: Card,
  existingCards: CardItem[]
): CardItem | null => {
  const existingCard = existingCards.find(byCard(card));
  if (existingCard) {
    return existingCard;
  }

  return null;
};

export type AssociatedCard = {
  id: string | null;
  card: Card;
};

export const associateCards = (
  cards: Card[],
  existingCards: CardItem[]
): AssociatedCard[] => {
  return cards.map((card) => {
    const associatedCardItem = getAssociatedCardItem(card, existingCards);
    return {
      id: associatedCardItem?.id ?? null,
      card: {
        ...card,
        tags: associatedCardItem?.data.tags ?? [],
      },
    };
  });
};
