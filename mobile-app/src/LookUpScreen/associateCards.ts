import { Card, CardItem } from '@vocably/model';
import { byCard } from '@vocably/model-operations';

export const getAssociatedId = (
  card: Card,
  existingCards: CardItem[]
): string | null => {
  const existingCard = existingCards.find(byCard(card));
  if (existingCard) {
    return existingCard.id;
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
  return cards.map((card) => ({
    id: getAssociatedId(card, existingCards),
    card,
  }));
};
