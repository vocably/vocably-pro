import { Collection, makeCreate } from '@vocably/crud';
import {
  Card,
  CardItem,
  AnalyzePayload,
  Analysis,
  Translation,
} from '@vocably/model';
import { createSrsItem } from '@vocably/srs';
import { join } from '@vocably/sulna';
import { merge } from 'lodash-es';

const extractTranslation = (
  source: string,
  translations: Translation[]
): string => {
  const translation = translations.find(
    (tr) => tr.source.toLowerCase() === source.toLowerCase()
  );
  if (translation) {
    return translation.target;
  }

  return '';
};

const byCard =
  (card: Card) =>
  (item: CardItem): boolean => {
    return (
      item.data.source.toLowerCase() === card.source.toLowerCase() &&
      item.data.partOfSpeech === card.partOfSpeech
    );
  };

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

export const createCards = (
  collection: Collection<Card>,
  payload: AnalyzePayload,
  analysis: Analysis
): CardItem[] => {
  const srsItem = createSrsItem();

  if (analysis.lexicala === undefined || analysis.lexicala.length === 0) {
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
    analysis.lexicala.map((lexicalaItem) => {
      const headword = Array.isArray(lexicalaItem.headword)
        ? lexicalaItem.headword[0]
        : lexicalaItem.headword;
      return {
        language: analysis.translation.sourceLanguage,
        source: headword.text,
        definition: join(
          lexicalaItem.senses
            .filter((s) => s.definition)
            .map((s) => s.definition)
        ),
        translation: extractTranslation(headword.text, analysis.normalized),
        partOfSpeech: headword.pos ?? '',
        ...srsItem,
      };
    })
  );
};
