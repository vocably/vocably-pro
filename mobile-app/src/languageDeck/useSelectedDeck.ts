import { useContext } from 'react';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { Deck, useLanguageDeck } from './useLanguageDeck';

type Options = {
  autoReload: boolean;
};

export const useSelectedDeck = ({ autoReload }: Options): Deck => {
  const { selectedLanguage } = useContext(LanguagesContext);
  return useLanguageDeck({ language: selectedLanguage, autoReload });
};
