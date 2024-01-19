import { CardItem } from '@vocably/model';

type DueDateCardItem = {
  data: {
    dueDate: CardItem['data']['dueDate'];
  };
};

export const byDueDate =
  (today: number) =>
  (item1: DueDateCardItem, item2: DueDateCardItem): number => {
    if (item1.data.dueDate === today && item2.data.dueDate !== today) {
      return -1;
    } else if (item1.data.dueDate !== today && item2.data.dueDate === today) {
      return 1;
    }

    return item2.data.dueDate - item1.data.dueDate;
  };
