import { Card, CardItem, LanguageDeck, Result } from '@vocably/model';
import { useCallback, useContext, useEffect, useState } from 'react';
import { LanguagesContext } from './languages/LanguagesContainer';
import { Item, makeDelete, makeUpdate } from '@vocably/crud';
import { loadLanguageDeck, saveLanguageDeck } from '@vocably/api';

type SaveOptions = {
  silent: boolean;
};

export type Deck = {
  status: 'loading' | 'loaded' | 'error';
  deck: LanguageDeck;
  update: (
    id: string,
    data: Partial<Card>,
    saveOptions: SaveOptions
  ) => Promise<Result<CardItem>>;
  remove: (id: string, saveOptions: SaveOptions) => Promise<Result<true>>;
  reload: () => Promise<Result<true>>;
};

export const useLanguageDeck = (): Deck => {
  const { selectedLanguage } = useContext(LanguagesContext);

  const [status, setStatus] = useState<Deck['status']>('loading');
  const [deck, setDeck] = useState<LanguageDeck>({
    language: '',
    cards: [],
  });

  const update = useCallback(
    (
      id: string,
      data: Partial<Card>,
      saveOptions: SaveOptions
    ): Promise<Result<Item<Card>>> =>
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

        if (!saveOptions.silent) {
          setDeck(loadResult.value);
        }

        return updateResult;
      }),
    [selectedLanguage]
  );

  const remove = useCallback(
    (id: string, saveOptions: SaveOptions): Promise<Result<true>> =>
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

        if (!saveOptions.silent) {
          setDeck(loadResult.value);
        }

        return deleteResult;
      }),
    [selectedLanguage]
  );

  const reload = useCallback((): Promise<Result<true>> => {
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
  }, [selectedLanguage]);

  useEffect(() => {
    setStatus('loading');
    if (selectedLanguage === '') {
      return;
    }

    reload().then();
  }, [selectedLanguage]);

  return {
    status,
    deck,
    update,
    remove,
    reload,
  };
};
