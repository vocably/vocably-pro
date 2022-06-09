import { CardItem } from '@vocably/model';

export const byDate = (a: CardItem, b: CardItem): number => {
  let k = b.created - a.created;

  if (k !== 0) {
    return k;
  }

  k = a.data.source.localeCompare(b.data.source);

  if (k !== 0) {
    return k;
  }

  return a.data.partOfSpeech.localeCompare(b.data.partOfSpeech);
};
