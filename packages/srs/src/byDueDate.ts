import { CardItem } from '@vocably/model';

export const byDueDate = (item1: CardItem, item2: CardItem): number =>
  item1.data.dueDate - item2.data.dueDate;
