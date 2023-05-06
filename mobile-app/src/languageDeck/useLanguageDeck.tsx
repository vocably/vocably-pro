import { SrsCard, CardItem, LanguageDeck, Result, Card } from '@vocably/model';
import { useCallback, useContext, useEffect } from 'react';
import {
  LanguageContainerDeck,
  LanguagesContext,
} from '../languages/LanguagesContainer';
import { Item, makeCreate, makeDelete, makeUpdate } from '@vocably/crud';
import { loadLanguageDeck, saveLanguageDeck } from '@vocably/api';
import { createSrsItem } from '@vocably/srs';

export type Deck = {
  status: LanguageContainerDeck['status'];
  deck: LanguageContainerDeck['deck'];
  add: (card: Card) => Promise<Result<CardItem>>;
  update: (id: string, data: Partial<SrsCard>) => Promise<Result<CardItem>>;
  remove: (id: string) => Promise<Result<true>>;
  reload: () => Promise<Result<true>>;
};

export const defaultDeckValue: LanguageDeck = {
  language: '',
  cards: [],
};

export const useLanguageDeck = (language: string): Deck => {
  const { decks, storeDeck, addLanguage } = useContext(LanguagesContext);
  const deck = decks[language] ?? {
    status: 'loaded',
    deck: {
      language,
      cards: [],
    },
  };

  const add = useCallback(
    (card: Card): Promise<Result<CardItem>> =>
      loadLanguageDeck(language).then(async (loadResult) => {
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

        addLanguage(deck.deck.language);

        storeDeck({
          ...deck,
          deck: loadResult.value,
        });

        return {
          success: true,
          value: cardItem,
        };
      }),
    [language, addLanguage, storeDeck, deck]
  );

  const update = useCallback(
    (id: string, data: Partial<SrsCard>): Promise<Result<Item<SrsCard>>> =>
      loadLanguageDeck(language).then(async (loadResult) => {
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

        storeDeck({
          ...deck,
          deck: loadResult.value,
        });

        return updateResult;
      }),
    [language]
  );

  const remove = useCallback(
    (id: string): Promise<Result<true>> =>
      loadLanguageDeck(language).then(async (loadResult) => {
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

        storeDeck({
          ...deck,
          deck: loadResult.value,
        });

        return deleteResult;
      }),
    [language]
  );

  const reload = useCallback((): Promise<Result<true>> => {
    if (language === '') {
      return Promise.resolve({
        success: true,
        value: true,
      });
    }

    storeDeck({
      ...deck,
      status: 'loading',
    });

    return loadLanguageDeck(language).then((result) => {
      if (result.success === false) {
        storeDeck({
          ...deck,
          status: 'error',
        });
        return result;
      }

      storeDeck({
        status: 'loaded',
        deck: result.value,
      });

      return {
        success: true,
        value: true,
      };
    });
  }, [language, storeDeck, decks, deck]);

  useEffect(() => {
    if (!language) {
      return;
    }

    reload().then();
  }, [language]);

  return {
    add,
    update,
    remove,
    reload,
    status: deck.status,
    deck: deck.deck,
  };
};
