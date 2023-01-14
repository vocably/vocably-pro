import React, { FC, ReactNode } from 'react';
import { createContext } from 'react';
import { Loader } from './Loader';
import { Card, CardItem, LanguageDeck, Result } from '@vocably/model';
import { Text } from 'react-native-paper';
import { useLanguageDeck } from './useLanguageDeck';

type Deck = {
  status: 'loading' | 'loaded' | 'error';
  deck: LanguageDeck;
  update: (id: string, data: Partial<Card>) => Promise<Result<CardItem>>;
  remove: (id: string) => Promise<Result<true>>;
};

export const DeckContext = createContext<Deck>({
  status: 'loading',
  deck: {
    language: '',
    cards: [],
  },
  update: () => new Promise<Result<CardItem>>(() => {}),
  remove: () => new Promise<Result<true>>(() => {}),
});

type DeckContainer = FC<{
  children: ReactNode;
}>;

export const DeckContainer: DeckContainer = ({ children }) => {
  const deck = useLanguageDeck();

  return (
    <DeckContext.Provider value={deck}>
      {deck.status === 'loading' && <Loader></Loader>}
      {deck.status === 'error' && <Text>Loading error</Text>}
      {deck.status === 'loaded' && children}
    </DeckContext.Provider>
  );
};
