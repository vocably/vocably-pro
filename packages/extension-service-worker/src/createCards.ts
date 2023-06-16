import { Collection, makeCreate } from '@vocably/crud';
import {
  Analysis,
  AnalyzePayload,
  CardItem,
  isDirectAnalyzePayload,
  SrsCard,
} from '@vocably/model';
import { byCard, equalCards } from '@vocably/model-operations';
import { createSrsItem } from '@vocably/srs';
import { explode, join } from '@vocably/sulna';
import { merge } from 'lodash-es';

export const addCardCandidates = (
  collection: Collection<SrsCard>,
  cardCandidates: SrsCard[]
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

export const combineCards = (acc: SrsCard[], card: SrsCard): SrsCard[] => {
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
  collection: Collection<SrsCard>,
  payload: AnalyzePayload,
  analysis: Analysis
): CardItem[] => {
  const srsItem = createSrsItem();

  if (analysis.items === undefined || analysis.items.length === 0) {
    return addCardCandidates(collection, [
      {
        language: analysis.translation.sourceLanguage,
        source: isDirectAnalyzePayload(payload)
          ? payload.source
          : analysis.source,
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
      .map((analysisItem): SrsCard => {
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
