import { GoogleLanguage } from './language';
import { Card } from './language-deck';

export type GenerateMnemonicPayload = {
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  card: Card;
};

export type GenerateMnemonicResult = {
  text: string;
};
