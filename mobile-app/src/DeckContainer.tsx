import React, { FC, ReactNode, useContext } from 'react';
import { createContext } from 'react';
import { Loader } from './Loader';
import { CardItem, LanguageDeck, Result } from '@vocably/model';
import { Text } from 'react-native-paper';
import {
  Deck,
  defaultDeckValue,
  useLanguageDeck,
} from './languageDeck/useLanguageDeck';
import { LanguagesContext } from './languages/LanguagesContainer';

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
  const deck = useLanguageDeck(selectedLanguage);

  return (
    <DeckContext.Provider value={deck}>
      {deck.status === 'loading' && <Loader>Loading cards...</Loader>}
      {deck.status === 'error' && <Text>Loading error</Text>}
      {deck.status === 'loaded' && children}
    </DeckContext.Provider>
  );
};
