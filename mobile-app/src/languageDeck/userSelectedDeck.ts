import { Deck, useLanguageDeck } from './useLanguageDeck';
import { useContext } from 'react';
import { LanguagesContext } from '../languages/LanguagesContainer';

export const userSelectedDeck = (): Deck => {
  const { selectedLanguage } = useContext(LanguagesContext);
  return useLanguageDeck(selectedLanguage);
};
