import { Translation } from './analysis';
import { CardItem, TagItem } from './language-deck';

export type DetachedCardItem = Pick<CardItem, 'data'>;

export type TranslationCard = CardItem | DetachedCardItem;

export type TranslationCards = {
  source: string;
  translation: Translation;
  cards: TranslationCard[];
  tags: TagItem[];
};

export type RemoveCardPayload = {
  translationCards: TranslationCards;
  card: CardItem;
};

export type AddCardPayload = {
  translationCards: TranslationCards;
  card: DetachedCardItem;
};

export const isCardItem = (
  item: CardItem | DetachedCardItem
): item is CardItem => {
  return (item as CardItem).id !== undefined;
};

export const isDetachedCardItem = (
  item: CardItem | DetachedCardItem
): item is DetachedCardItem => {
  return (item as CardItem).id === undefined;
};
