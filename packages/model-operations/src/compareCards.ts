import { Card, CardItem } from '@vocably/model';

export const equalCards =
  (a: Card) =>
  (b: Card): boolean =>
    a.source.toLowerCase() === b.source.toLowerCase() &&
    a.partOfSpeech === b.partOfSpeech;

export const byCard =
  (card: Card) =>
  (item: CardItem): boolean =>
    equalCards(card)(item.data);
