import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { Loader } from './loaders/Loader';
import { CardItem, Result } from '@vocably/model';
import { Text } from 'react-native-paper';
import {
  Deck,
  defaultDeckValue,
  useLanguageDeck,
} from './languageDeck/useLanguageDeck';
import { LanguagesContext } from './languages/LanguagesContainer';
import { OverlayLoader } from './loaders/OverlayLoader';

export const DeckContext = createContext<Deck>({
  status: 'loading',
  deck: defaultDeckValue,
  add: () => new Promise<Result<CardItem>>(() => {}),
  update: () => new Promise<Result<CardItem>>(() => {}),
  remove: () => new Promise<Result<true>>(() => {}),
  reload: () => new Promise(() => {}),
});

type DeckContainer = FC<{
  children: ReactNode;
}>;

export const DeckContainer: DeckContainer = ({ children }) => {
  const { selectedLanguage } = useContext(LanguagesContext);
  const [isFirstDeck, setIsFirstDeck] = useState(true);
  const deck = useLanguageDeck(selectedLanguage);

  useEffect(() => {
    if (deck.status === 'loaded' && isFirstDeck) {
      setIsFirstDeck(false);
    }
  }, [setIsFirstDeck, deck.status]);

  return (
    <DeckContext.Provider value={deck}>
      {isFirstDeck && deck.status === 'loading' && (
        <Loader>Loading cards...</Loader>
      )}
      {deck.status === 'error' && <Text>Loading error</Text>}
      {((!isFirstDeck && deck.status !== 'error') ||
        deck.status === 'loaded') && (
        <OverlayLoader isLoading={deck.status === 'loading'}>
          {children}
        </OverlayLoader>
      )}
    </DeckContext.Provider>
  );
};
