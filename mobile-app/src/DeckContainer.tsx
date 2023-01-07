import React, {
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createContext } from 'react';
import { loadLanguageDeck, saveLanguageDeck } from '@vocably/api';
import { Loader } from './Loader';
import { Card, CardItem, LanguageDeck, Result } from '@vocably/model';
import { Text } from 'react-native-paper';
import { LanguagesContext } from './languages/LanguagesContainer';
import { Item, makeDelete, makeUpdate } from '@vocably/crud';

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
  const { selectedLanguage } = useContext(LanguagesContext);
  const [status, setStatus] = useState<Deck['status']>('loading');
  const [deck, setDeck] = useState<LanguageDeck>({
    language: '',
    cards: [],
  });

  const update = useCallback(
    (id: string, data: Partial<Card>): Promise<Result<Item<Card>>> =>
      loadLanguageDeck(selectedLanguage).then(async (loadResult) => {
        if (loadResult.success === false) {
          return loadResult;
        }

        const updateResult = makeUpdate(loadResult.value.cards)(id, data);
        if (updateResult.success === false) {
          return updateResult;
        }

        const saveResult = await saveLanguageDeck(loadResult.value);

        if (saveResult.success === false) {
          return saveResult;
        }

        setDeck(loadResult.value);

        return updateResult;
      }),
    []
  );

  const remove = useCallback(
    (id: string): Promise<Result<true>> =>
      loadLanguageDeck(selectedLanguage).then(async (loadResult) => {
        if (loadResult.success === false) {
          return loadResult;
        }

        const deleteResult = makeDelete(loadResult.value.cards)(id);
        if (deleteResult.success === false) {
          return deleteResult;
        }

        const saveResult = await saveLanguageDeck(loadResult.value);

        if (saveResult.success === false) {
          return saveResult;
        }

        setDeck(loadResult.value);

        return deleteResult;
      }),
    []
  );

  useEffect(() => {
    setStatus('loading');
    if (selectedLanguage === '') {
      return;
    }

    loadLanguageDeck(selectedLanguage).then((result) => {
      if (result.success === false) {
        setStatus('error');
        return;
      }

      setStatus('loaded');
      setDeck(result.value);
    });
  }, [selectedLanguage]);

  const value: Deck = {
    status,
    deck,
    update,
    remove,
  };

  return (
    <DeckContext.Provider value={value}>
      {status === 'loading' && <Loader></Loader>}
      {status === 'error' && <Text>Loading error</Text>}
      {status === 'loaded' && children}
    </DeckContext.Provider>
  );
};
