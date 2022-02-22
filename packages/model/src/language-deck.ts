export type SrsItem = {
  interval: number;
  repetition: number;
  eFactor: number;
  dueDate: number;
};

export type Card = {
  language: string;
  source: string;
  definition: string;
  translation: string;
  partOfSpeech: string;
} & SrsItem;

export type CardItem = {
  id: string;
  created: number;
  updated?: number;
  data: Card;
};

export type LanguageDeck = {
  language: string;
  cards: CardItem[];
};
