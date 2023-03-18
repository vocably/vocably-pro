import { Card, CardItem } from '@vocably/model';
import { byCard } from '@vocably/model-operations';

export const getAssociatedId = (card: Card, existingCards: CardItem[]) => {
  const existingCard = existingCards.find(byCard(card));
  if (existingCard) {
    return existingCard.id;
  }

  return null;
};

export type AssociatedCard = Card & {
  id: string | null;
};

export const associateCards = (
  cards: Card[],
  existingCards: CardItem[]
): AssociatedCard[] => {
  return cards.map((card) => ({
    ...card,
    id: getAssociatedId(card, existingCards),
  }));
};
