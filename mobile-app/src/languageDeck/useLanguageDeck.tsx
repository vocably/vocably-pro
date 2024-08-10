import { loadLanguageDeck, saveLanguageDeck } from '@vocably/api';
import { Item, makeCreate, makeDelete, makeUpdate } from '@vocably/crud';
import {
  Card,
  CardItem,
  LanguageDeck,
  Result,
  SrsCard,
  Tag,
  TagItem,
} from '@vocably/model';
import { createSrsItem } from '@vocably/srs';
import { useCallback, useContext, useEffect } from 'react';
import {
  LanguageContainerDeck,
  LanguagesContext,
} from '../languages/LanguagesContainer';

export type Deck = {
  status: LanguageContainerDeck['status'];
  deck: LanguageContainerDeck['deck'];
  add: (card: Card) => Promise<Result<CardItem>>;
  update: (id: string, data: Partial<SrsCard>) => Promise<Result<CardItem>>;
  remove: (id: string) => Promise<Result<true>>;
  reload: () => Promise<Result<true>>;
  addTags: (tags: Tag[]) => Promise<Result<TagItem[]>>;
  clearTags: () => Promise<Result<true>>;
  removeTag: (id: string) => Promise<Result<true>>;
};

export const defaultDeckValue: LanguageDeck = {
  language: '',
  cards: [],
  tags: [],
};

export const useLanguageDeck = (language: string): Deck => {
  const { decks, storeDeck, addLanguage } = useContext(LanguagesContext);
  const deck = decks[language] ?? {
    status: 'initial',
    deck: {
      language,
      cards: [],
      tags: [],
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
          status: 'loaded',
        });

        return {
          success: true,
          value: cardItem,
        };
      }),
    [language, addLanguage, storeDeck, deck]
  );

  const addTags = useCallback(
    async (tags: Tag[]): Promise<Result<TagItem[]>> => {
      if (tags.length === 0) {
        return {
          success: true,
          value: [],
        };
      }

      return loadLanguageDeck(language).then(async (loadResult) => {
        if (loadResult.success === false) {
          return loadResult;
        }
        const existingTags = loadResult.value.tags ?? [];

        const addTag = makeCreate(existingTags);

        const tagItems = tags.map(addTag);

        const deckWithTags = {
          ...loadResult.value,
          tags: [...existingTags],
        };

        const saveResult = await saveLanguageDeck(deckWithTags);

        if (saveResult.success === false) {
          return saveResult;
        }

        addLanguage(deck.deck.language);

        storeDeck({
          ...deck,
          deck: deckWithTags,
          status: 'loaded',
        });

        return {
          success: true,
          value: tagItems,
        };
      });
    },
    [language]
  );

  const clearTags = useCallback(async (): Promise<Result<true>> => {
    return loadLanguageDeck(language).then(async (loadResult) => {
      if (loadResult.success === false) {
        return loadResult;
      }

      const newDeck = {
        ...loadResult.value,
        tags: [],
      };

      const saveResult = await saveLanguageDeck(newDeck);

      if (saveResult.success === false) {
        return saveResult;
      }

      storeDeck({
        ...deck,
        deck: newDeck,
        status: 'loaded',
      });

      return {
        success: true,
        value: true,
      };
    });
  }, [language]);

  const removeTag = useCallback(
    async (id: string): Promise<Result<true>> => {
      return loadLanguageDeck(language).then(async (loadResult) => {
        if (loadResult.success === false) {
          return loadResult;
        }

        const newDeck: LanguageDeck = {
          ...loadResult.value,
          cards: loadResult.value.cards.map((card) => {
            if (!card.data.tags) {
              return card;
            }

            return {
              ...card,
              data: {
                ...card.data,
                tags: card.data.tags.filter((tag) => tag.id !== id),
              },
            };
          }),
          tags: (loadResult.value.tags ?? []).filter(
            (tagItem) => tagItem.id !== id
          ),
        };

        const saveResult = await saveLanguageDeck(newDeck);

        if (saveResult.success === false) {
          return saveResult;
        }

        storeDeck({
          ...deck,
          deck: newDeck,
          status: 'loaded',
        });

        return {
          success: true,
          value: true,
        };
      });
    },
    [language]
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
          status: 'loaded',
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
          status: 'loaded',
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

    if (deck.status === 'initial') {
      storeDeck({
        ...deck,
        status: 'loading',
      });
    }

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
    addTags,
    removeTag,
    clearTags,
  };
};
