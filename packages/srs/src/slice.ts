import { CardItem } from '@vocably/model';
import { byDueDate } from './byDueDate';

export const slice = (
  today: Date,
  maxCards: number,
  list: CardItem[]
): CardItem[] => {
  if (list.length === 0) {
    return [];
  }

  const todayTS = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate()
  );

  const batch: CardItem[] = [];
  const sortedList = list.sort(byDueDate(todayTS));

  const isGreedy = sortedList[0].data.dueDate > todayTS;

  for (let i = 0; i < sortedList.length; i++) {
    if (i === maxCards) {
      return batch;
    }

    if (!isGreedy && sortedList[i].data.dueDate > todayTS) {
      return batch;
    }

    batch.push(sortedList[i]);
  }

  return batch;
};
