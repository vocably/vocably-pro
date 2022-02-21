import { CardItem } from './language-deck';
import { Translation } from './analysis';

export type TranslationCards = {
  source: string;
  translation: Translation;
  cards: CardItem[];
};
