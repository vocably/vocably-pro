import { SrsItem } from '@vocably/model';
import { buildDueDate } from './dueDate';

export type SrsScore = 0 | 1 | 2 | 3 | 4 | 5;

export const grade = (item: SrsItem, score: SrsScore): SrsItem => {
  let nextInterval: number;
  let nextRepetition: number;
  let nextEFactor: number;

  if (score >= 3) {
    if (item.repetition === 0) {
      nextInterval = 1;
      nextRepetition = 1;
    } else if (item.repetition === 1) {
      nextInterval = 6;
      nextRepetition = 2;
    } else {
      nextInterval = Math.round(item.interval * item.eFactor);
      nextRepetition = item.repetition + 1;
    }
  } else {
    nextInterval = 1;
    nextRepetition = 0;
  }

  nextEFactor =
    item.eFactor + (0.1 - (5 - score) * (0.08 + (5 - score) * 0.02));

  if (nextEFactor < 1.3) nextEFactor = 1.3;

  const currentReverse = !!item.reverse;
  let nextReverse: boolean;

  if (score === 5) {
    nextReverse = !currentReverse;
  } else if (score < 5 && score > 1) {
    nextReverse = currentReverse;
  } else {
    nextReverse = false;
  }

  return {
    interval: nextInterval,
    repetition: nextRepetition,
    eFactor: nextEFactor,
    dueDate: buildDueDate(nextInterval),
    reverse: nextReverse,
  };
};
