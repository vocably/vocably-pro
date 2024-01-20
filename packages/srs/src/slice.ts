import { CardItem } from '@vocably/model';

export type SliceItem = {
  data: Pick<CardItem['data'], 'dueDate'>;
};

export const slice = <T extends SliceItem>(
  today: Date,
  maxCards: number,
  list: T[]
): T[] => {
  if (list.length === 0) {
    return [];
  }

  const todayTS = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate()
  );

  const batch: CardItem[] = [];

  const classifiedListItems: {
    past: T[];
    future: T[];
    today: T[];
  } = {
    past: [],
    future: [],
    today: [],
  };

  list.forEach((item) => {
    if (item.data.dueDate < todayTS) {
      classifiedListItems.past.push(item);
    } else if (item.data.dueDate === todayTS) {
      classifiedListItems.today.push(item);
    } else {
      classifiedListItems.future.push(item);
    }
  });

  const result = classifiedListItems.today.slice(0, maxCards);

  if (result.length === maxCards) {
    return result;
  }

  result.push(
    ...classifiedListItems.past
      .sort((a, b) => b.data.dueDate - a.data.dueDate)
      .slice(0, maxCards - result.length)
  );

  if (classifiedListItems.today.length > 0 || result.length === maxCards) {
    return result;
  }

  result.push(
    ...classifiedListItems.future
      .sort((a, b) => a.data.dueDate - b.data.dueDate)
      .slice(0, maxCards - result.length)
  );

  return result;
};
