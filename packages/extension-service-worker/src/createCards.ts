import { Collection, makeCreate } from '@vocably/crud';
import {
  Card,
  CardItem,
  AnalyzePayload,
  Analysis,
  Translation,
} from '@vocably/model';
import { createSrsItem } from '@vocably/srs';
import { explode, join } from '@vocably/sulna';
import { merge } from 'lodash-es';

const equalCards =
  (a: Card) =>
  (b: Card): boolean =>
    a.source.toLowerCase() === b.source.toLowerCase() &&
    a.partOfSpeech === b.partOfSpeech;

const byCard =
  (card: Card) =>
  (item: CardItem): boolean =>
    equalCards(card)(item.data);

export const addCardCandidates = (
  collection: Collection<Card>,
  cardCandidates: Card[]
): CardItem[] => {
  const addItem = makeCreate(collection);

  return cardCandidates.map((card) => {
    const existingItem = collection.find(byCard(card));

    if (existingItem === undefined) {
      return addItem(card);
    }

    return merge({ data: card }, existingItem);
  });
};

export const combineCards = (acc: Card[], card: Card): Card[] => {
  const existingIndex = acc.findIndex(equalCards(card));
  if (existingIndex === -1) {
    return [...acc, card];
  }

  return acc.map((existingCard, index) => {
    if (index !== existingIndex) {
      return existingCard;
    }

    return {
      ...existingCard,
      definition: join([
        ...explode(existingCard.definition),
        ...explode(card.definition),
      ]),
    };
  });
};

export const createCards = (
  collection: Collection<Card>,
  payload: AnalyzePayload,
  analysis: Analysis
): CardItem[] => {
  const srsItem = createSrsItem();

  if (analysis.items === undefined || analysis.items.length === 0) {
    return addCardCandidates(collection, [
      {
        language: analysis.translation.sourceLanguage,
        source: payload.source,
        definition: '',
        translation: analysis.translation.target,
        partOfSpeech: '',
        ...srsItem,
      },
    ]);
  }

  return addCardCandidates(
    collection,
    analysis.items
      .map((analysisItem): Card => {
        return {
          language: analysis.translation.sourceLanguage,
          source: analysisItem.source,
          definition: join(analysisItem.definitions),
          translation: analysisItem.translation,
          partOfSpeech: analysisItem.partOfSpeech ?? '',
          ...srsItem,
        };
      })
      .reduce(combineCards, [])
  );
};
