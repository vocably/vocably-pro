import { CardItem } from '@vocably/model';
import { byDueDate } from './byDueDate';

export const slice = (
  date: Date,
  maxCards: number,
  list: CardItem[]
): CardItem[] => {
  if (list.length === 0) {
    return [];
  }

  const dueTs = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );

  const batch: CardItem[] = [];
  const sortedList = list.sort(byDueDate);

  const isGreedy = sortedList[0].data.dueDate > dueTs;

  for (let i = 0; i < sortedList.length; i++) {
    if (i === maxCards) {
      return batch;
    }

    if (!isGreedy && sortedList[i].data.dueDate > dueTs) {
      return batch;
    }

    batch.push(sortedList[i]);
  }

  return batch;
};
