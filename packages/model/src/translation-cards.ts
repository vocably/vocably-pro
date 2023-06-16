import { Translation } from './analysis';
import { CardItem } from './language-deck';

export type TranslationCards = {
  source: string;
  translation: Translation;
  cards: CardItem[];
};
