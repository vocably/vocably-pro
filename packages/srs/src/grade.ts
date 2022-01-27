import { CardItem } from '@vocably/model';
import { buildDueDate } from './dueDate';

export type SrsScore = 0 | 1 | 2 | 3 | 4 | 5;

export const grade = (item: CardItem, score: SrsScore) => {
  let nextInterval: number;
  let nextRepetition: number;
  let nextEFactor: number;

  if (score >= 3) {
    if (item.data.repetition === 0) {
      nextInterval = 1;
      nextRepetition = 1;
    } else if (item.data.repetition === 1) {
      nextInterval = 6;
      nextRepetition = 2;
    } else {
      nextInterval = Math.round(item.data.interval * item.data.eFactor);
      nextRepetition = item.data.repetition + 1;
    }
  } else {
    nextInterval = 1;
    nextRepetition = 0;
  }

  nextEFactor =
    item.data.eFactor + (0.1 - (5 - score) * (0.08 + (5 - score) * 0.02));

  if (nextEFactor < 1.3) nextEFactor = 1.3;

  item.data = {
    ...item.data,
    interval: nextInterval,
    repetition: nextRepetition,
    eFactor: nextEFactor,
    dueDate: buildDueDate(nextInterval),
  };
};
