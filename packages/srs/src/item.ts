import { SrsItem } from '@vocably/model';
import { buildDueDate } from './dueDate';

export const createSrsItem = (): SrsItem => ({
  interval: 0,
  repetition: 0,
  eFactor: 2.5,
  dueDate: buildDueDate(0),
});
