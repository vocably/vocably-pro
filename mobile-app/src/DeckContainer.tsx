import React, { FC, ReactNode } from 'react';
import { createContext } from 'react';
import { Loader } from './Loader';
import { CardItem, Result } from '@vocably/model';
import { Text } from 'react-native-paper';
import { Deck, useLanguageDeck } from './useLanguageDeck';

export const DeckContext = createContext<Deck>({
  status: 'loading',
  deck: {
    language: '',
    cards: [],
  },
  update: () => new Promise<Result<CardItem>>(() => {}),
  remove: () => new Promise<Result<true>>(() => {}),
  reload: () => new Promise(() => {}),
});

type DeckContainer = FC<{
  children: ReactNode;
}>;

export const DeckContainer: DeckContainer = ({ children }) => {
  const deck = useLanguageDeck();

  return (
    <DeckContext.Provider value={deck}>
      {deck.status === 'loading' && <Loader>Loading cards...</Loader>}
      {deck.status === 'error' && <Text>Loading error</Text>}
      {deck.status === 'loaded' && children}
    </DeckContext.Provider>
  );
};
