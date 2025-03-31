import { CardItem } from '@vocably/model';
import { Column, columnLabels } from '../../../importExport';

export const getValue = (card: CardItem, column: Column): string => {
  if (column === 'tags') {
    return card.data.tags.map((t) => t.data.title).join(', ');
  }

  return card.data[column] ?? '';
};

export const getColumns = (cards: CardItem[]): Column[] => {
  return (Object.keys(columnLabels) as Column[]).filter((column) => {
    return cards.some((card) => !!getValue(card, column));
  });
};
