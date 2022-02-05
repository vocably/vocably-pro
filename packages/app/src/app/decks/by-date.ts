import { CardItem } from '@vocably/model';

export const byDate = (a: CardItem, b: CardItem): number =>
  b.created - a.created;
