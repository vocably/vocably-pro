import { SrsCard, CardItem, LanguageDeck, Result, Card } from '@vocably/model';
import { useCallback, useContext, useEffect, useState } from 'react';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { Item, makeCreate, makeDelete, makeUpdate } from '@vocably/crud';
import { loadLanguageDeck, saveLanguageDeck } from '@vocably/api';
import { createSrsItem } from '@vocably/srs';

export type Deck = {
  status: 'loading' | 'loaded' | 'error';
  deck: LanguageDeck;
  add: (card: Card) => Promise<Result<CardItem>>;
  update: (id: string, data: Partial<SrsCard>) => Promise<Result<CardItem>>;
  remove: (id: string) => Promise<Result<true>>;
  reload: () => Promise<Result<true>>;
};

export const defaultDeckValue: LanguageDeck = {
  language: '',
  cards: [],
};

export const useLanguageDeck = (): Deck => {
  const { selectedLanguage, status: decksLoadingStatus } =
    useContext(LanguagesContext);

  const [status, setStatus] = useState<Deck['status']>('loading');
  const [deck, setDeck] = useState<LanguageDeck>({
    language: '',
    cards: [],
  });

  const add = useCallback(
    (card: Card): Promise<Result<CardItem>> =>
      loadLanguageDeck(selectedLanguage).then(async (loadResult) => {
        if (loadResult.success === false) {
          return loadResult;
        }

        const cardItem = makeCreate(loadResult.value.cards)({
          ...card,
          ...createSrsItem(),
        });

        const saveResult = await saveLanguageDeck(loadResult.value);

        if (saveResult.success === false) {
          return saveResult;
        }

        setDeck(loadResult.value);

        return {
          success: true,
          value: cardItem,
        };
      }),
    [selectedLanguage]
  );

  const update = useCallback(
    (id: string, data: Partial<SrsCard>): Promise<Result<Item<SrsCard>>> =>
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
    [selectedLanguage]
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
    [selectedLanguage]
  );

  const reload = useCallback((): Promise<Result<true>> => {
    if (decksLoadingStatus !== 'loaded' || selectedLanguage === '') {
      setDeck(defaultDeckValue);
      return Promise.resolve({
        success: true,
        value: true,
      });
    }

    setStatus('loading');

    return loadLanguageDeck(selectedLanguage).then((result) => {
      if (result.success === false) {
        setStatus('error');
        return result;
      }

      setStatus('loaded');
      setDeck(result.value);

      return {
        success: true,
        value: true,
      };
    });
  }, [selectedLanguage, decksLoadingStatus]);

  useEffect(() => {
    if (decksLoadingStatus !== 'loaded') {
      return;
    }

    reload().then();
  }, [selectedLanguage, decksLoadingStatus]);

  return {
    status,
    deck,
    add,
    update,
    remove,
    reload,
  };
};
