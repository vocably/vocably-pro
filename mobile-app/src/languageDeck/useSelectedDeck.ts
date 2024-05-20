import { useContext } from 'react';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { Deck, useLanguageDeck } from './useLanguageDeck';

export const useSelectedDeck = (): Deck => {
  const { selectedLanguage } = useContext(LanguagesContext);
  return useLanguageDeck(selectedLanguage);
};
