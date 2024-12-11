import { Collection } from '@vocably/crud';
import {
  Analysis,
  AnalyzePayload,
  isDirectAnalyzePayload,
  SrsCard,
  TranslationCard,
} from '@vocably/model';
import { byCard, equalCards } from '@vocably/model-operations';
import { createSrsItem } from '@vocably/srs';
import { explode, join } from '@vocably/sulna';
import { merge, pick } from 'lodash-es';

export const getCardCandidates = (
  collection: Collection<SrsCard>,
  cardCandidates: SrsCard[]
): TranslationCard[] => {
  return cardCandidates.map((card) => {
    const existingItem = collection.find(byCard(card));

    if (existingItem === undefined) {
      return {
        data: card,
      };
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

export const createTranslationCards = (
  collection: Collection<SrsCard>,
  payload: AnalyzePayload,
  analysis: Analysis
): TranslationCard[] => {
  const srsItem = createSrsItem();

  if (analysis.items === undefined || analysis.items.length === 0) {
    return getCardCandidates(collection, [
      {
        language: analysis.translation.sourceLanguage,
        source: isDirectAnalyzePayload(payload)
          ? payload.source
          : analysis.source,
        example: '',
        definition: '',
        translation: analysis.translation.target,
        partOfSpeech: '',
        tags: [],
        ...srsItem,
      },
    ]);
  }

  return getCardCandidates(
    collection,
    analysis.items
      .map((analysisItem): SrsCard => {
        return {
          language: analysis.translation.sourceLanguage,
          source: analysisItem.source,
          ipa: analysisItem.ipa,
          example: join(analysisItem.examples ?? []),
          definition: join(analysisItem.definitions),
          translation: analysisItem.translation,
          partOfSpeech: analysisItem.partOfSpeech ?? '',
          tags: [],
          ...pick(analysisItem, ['g']),
          ...srsItem,
        };
      })
      .reduce(combineCards, [])
  );
};
