import { AvailableLanguage, Card, CardItem } from '@vocably/api-types';
import { Result } from './utils/result';
import {
  buildLoadFunction,
  buildSaveFunction,
  buildRemoveFunction,
} from './utils/s3';
import { makeCreate, makeDelete, makeUpdate } from '@vocably/crud';

type DeckRequestParams = {
  language: AvailableLanguage;
  userId: string;
};

const loadFromStorage = buildLoadFunction<CardItem[]>(
  process.env.CARDS_S3_BUCKET
);
const saveToStorage = buildSaveFunction<CardItem[]>(
  process.env.CARDS_S3_BUCKET
);

const removeFromStorage = buildRemoveFunction(process.env.CARDS_S3_BUCKET);

const createDeckKey = ({ language, userId }: DeckRequestParams) =>
  `${userId}/${language}`;

export type LanguageCollection = {
  language: AvailableLanguage;
  collection: CardItem[];
  add: (cards: Card[]) => Promise<Result<CardItem[]>>;
  update: (
    cards: { id: string; card: Partial<Card> }[]
  ) => Promise<Result<CardItem[]>>;
  remove: (ids: string[]) => Promise<Result<null>>;
  removeEntireCollection: () => Promise<Result<null>>;
};

export const getCollection = (
  storageLoadResult: Awaited<ReturnType<typeof loadFromStorage>>
): Result<CardItem[]> => {
  if (storageLoadResult.success === true) {
    return storageLoadResult;
  }

  if (storageLoadResult.errorCode === 'S3_LOAD_MISSING_KEY') {
    return {
      success: true,
      value: [],
    };
  }

  return storageLoadResult;
};

export const makeFetchLanguageCollection =
  (userId: string) =>
  async (language: AvailableLanguage): Promise<Result<LanguageCollection>> => {
    const key = createDeckKey({ language, userId });
    const loadResult = getCollection(await loadFromStorage(key));

    if (loadResult.success === false) {
      return loadResult;
    }

    const collection = loadResult.value;

    const addItemToCollection = makeCreate(collection);
    const updateCollectionItem = makeUpdate(collection);
    const deleteCollectionItem = makeDelete(collection);

    return {
      success: true,
      value: {
        language,
        collection,
        add: async (cards) => {
          const cardItems = cards.map(addItemToCollection);
          const saveToStorageResult = await saveToStorage(key, collection);
          if (saveToStorageResult.success === false) {
            cardItems.forEach((cardItem) => deleteCollectionItem(cardItem.id));
            return saveToStorageResult;
          }
          return {
            success: true,
            value: cardItems,
          };
        },
        update: async (cards) => {
          const updateCardsResult = cards.map(({ id, card }) => ({
            id,
            result: updateCollectionItem(id, card),
          }));

          const unsuccessfulResult = updateCardsResult.find(
            (resultItem) => resultItem.result === false
          );

          if (unsuccessfulResult) {
            return {
              success: false,
              errorCode: 'CARD_COLLECTION_UPDATE_MISSING_CARD',
              reason: `The card with id ${unsuccessfulResult.id} is missing in the user ${userId} language collection ${language}.`,
              extra: cards,
            };
          }

          const saveResult = await saveToStorage(key, collection);

          if (saveResult.success === false) {
            return saveResult;
          }

          return {
            success: true,
            value: updateCardsResult
              .map(({ result }) => result)
              .filter((result): result is CardItem => result !== null),
          };
        },
        remove: async (ids) => {
          ids.forEach(deleteCollectionItem);

          const saveResult = await saveToStorage(key, collection);
          if (saveResult.success === false) {
            return saveResult;
          }

          return {
            success: true,
            value: null,
          };
        },
        removeEntireCollection: async () => {
          collection.length = 0;
          const removeResult = await removeFromStorage(key);
          if (removeResult.success === false) {
            return removeResult;
          }
          return {
            success: true,
            value: null,
          };
        },
      },
    };
  };
