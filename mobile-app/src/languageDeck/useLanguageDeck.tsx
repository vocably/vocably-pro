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
import { buildTagMap } from '@vocably/model-operations';
import { createSrsItem } from '@vocably/srs';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { getItem, setItem } from '../asyncAppStorage';
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
  updateTag: (id: string, data: Partial<Tag>) => Promise<Result<TagItem>>;
  filteredCards: LanguageContainerDeck['deck']['cards'];
  selectedTags: TagItem[];
  setSelectedTagIds: (ids: string[]) => Promise<any>;
};

const cacheSelectedTagIds = (language: string, existingIds: string[]) => {
  return setItem(`selectedItems-${language}`, JSON.stringify(existingIds));
};

const loadSelectedTagIds = async (language: string): Promise<string[]> => {
  try {
    return JSON.parse((await getItem(`selectedItems-${language}`)) ?? '[]');
  } catch (e) {
    console.error(
      `Unable to get or parse storage item data with the key selectedItems-${language}`,
      e
    );
    return [];
  }
};

type Options = {
  language: string;
  autoReload: boolean;
};

export const useLanguageDeck = ({ language, autoReload }: Options): Deck => {
  const { decks, storeDeck, addLanguage } = useContext(LanguagesContext);

  const deck = decks[language] ?? {
    status: 'initial',
    deck: {
      language,
      cards: [],
      tags: [],
    },
    selectedTags: [],
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
    [language, deck]
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
  }, [language, deck]);

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

        const selectedTags = deck.selectedTags.filter((t) => t.id !== id);

        await cacheSelectedTagIds(
          language,
          selectedTags.map((t) => t.id)
        );

        storeDeck({
          ...deck,
          deck: newDeck,
          status: 'loaded',
          selectedTags,
        });

        return {
          success: true,
          value: true,
        };
      });
    },
    [language, deck]
  );

  const updateTag = useCallback(
    async (id: string, data: Partial<Tag>): Promise<Result<TagItem>> => {
      return loadLanguageDeck(language).then(async (loadResult) => {
        if (loadResult.success === false) {
          return loadResult;
        }

        const updateResult = makeUpdate(loadResult.value.tags)(id, data);
        if (updateResult.success === false) {
          return updateResult;
        }

        const remapTag =
          (updatedTag: TagItem) =>
          (existingTagItem: TagItem): TagItem => {
            if (updatedTag.id === existingTagItem.id) {
              return updatedTag;
            }

            return existingTagItem;
          };

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
                tags: card.data.tags.map(remapTag(updateResult.value)),
              },
            };
          }),
          tags: (loadResult.value.tags ?? []).map(remapTag(updateResult.value)),
        };

        const saveResult = await saveLanguageDeck(newDeck);

        if (saveResult.success === false) {
          return saveResult;
        }

        const selectedTags = deck.selectedTags.map(
          remapTag(updateResult.value)
        );

        storeDeck({
          ...deck,
          deck: newDeck,
          status: 'loaded',
          selectedTags,
        });

        return {
          success: true,
          value: updateResult.value,
        };
      });
    },
    [language, deck]
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
    [language, deck]
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
    [language, deck]
  );

  const setSelectedTagIds = useCallback(
    async (ids: string[]) => {
      if (!language) {
        return;
      }

      const tagMap = buildTagMap(deck.deck.tags);
      const selectedTags = ids
        .filter((id) => tagMap[id] !== undefined)
        .map((id) => tagMap[id]);

      storeDeck({ ...deck, selectedTags });

      await cacheSelectedTagIds(
        language,
        selectedTags.map((t) => t.id)
      );
    },
    [language, storeDeck, deck]
  );

  const reload = useCallback(async (): Promise<Result<true>> => {
    if (language === '') {
      return {
        success: true,
        value: true,
      };
    }

    if (deck.status === 'initial') {
      storeDeck({
        ...deck,
        status: 'loading',
      });
    }
    return loadLanguageDeck(language).then(async (result) => {
      if (result.success === false) {
        storeDeck({
          ...deck,
          status: 'error',
        });
        return result;
      }

      const tagMap = buildTagMap(result.value.tags);
      const selectedTags = (await loadSelectedTagIds(language))
        .filter((id) => !!tagMap[id])
        .map((id) => tagMap[id]);

      storeDeck({
        status: 'loaded',
        deck: result.value,
        selectedTags,
      });

      return {
        success: true,
        value: true,
      };
    });
  }, [language, storeDeck, deck]);

  useEffect(() => {
    if (!autoReload || !language) {
      return;
    }

    reload().then();
  }, [autoReload, language]);

  const filteredCards = useMemo(() => {
    if (deck.selectedTags.length === 0) {
      return deck.deck.cards;
    }

    const tagMap = buildTagMap(deck.selectedTags);
    return deck.deck.cards.filter((card) =>
      card.data.tags.some((cardTag) => !!tagMap[cardTag.id])
    );
  }, [deck.deck.cards, deck.selectedTags]);

  return {
    add,
    update,
    remove,
    reload,
    status: deck.status,
    deck: deck.deck,
    addTags,
    removeTag,
    updateTag,
    clearTags,
    selectedTags: deck.selectedTags,
    setSelectedTagIds,
    filteredCards,
  };
};
