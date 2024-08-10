export type Tag = {
  title: string;
};

export type TagItem = {
  id: string;
  created: number;
  updated?: number;
  data: Tag;
};

export type SrsItem = {
  interval: number;
  repetition: number;
  eFactor: number;
  dueDate: number;
  reverse?: boolean;
};

export type Card = {
  language: string;
  source: string;
  ipa?: string;
  example?: string;
  definition: string;
  translation: string;
  partOfSpeech: string;
  tags: TagItem[];
};

export type SrsCard = Card & SrsItem;

export type CardItem = {
  id: string;
  created: number;
  updated?: number;
  data: SrsCard;
};

export type LanguageDeck = {
  language: string;
  cards: CardItem[];
  tags: TagItem[];
};

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
