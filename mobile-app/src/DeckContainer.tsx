import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { Loader } from './loaders/Loader';
import { CardItem, Result } from '@vocably/model';
import {
  Deck,
  defaultDeckValue,
  useLanguageDeck,
} from './languageDeck/useLanguageDeck';
import { LanguagesContext } from './languages/LanguagesContainer';
import { OverlayLoader } from './loaders/OverlayLoader';
import { Error } from './Error';

export const DeckContext = createContext<Deck>({
  status: 'loaded',
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
    if (deck.status === 'loaded' && deck.deck.language !== '' && isFirstDeck) {
      setIsFirstDeck(false);
    }
  }, [setIsFirstDeck, deck.status]);

  return (
    <DeckContext.Provider value={deck}>
      {isFirstDeck && deck.status === 'loading' && (
        <Loader>Loading cards...</Loader>
      )}
      {deck.status === 'error' && (
        <Error onRetry={deck.reload}>
          Oops! We're unable to load your cards right now.
        </Error>
      )}
      {((!isFirstDeck && deck.status !== 'error') ||
        deck.status === 'loaded') && (
        <OverlayLoader isLoading={deck.status === 'loading'}>
          {children}
        </OverlayLoader>
      )}
    </DeckContext.Provider>
  );
};
