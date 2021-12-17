import { Collection, makeCreate } from '@vocably/crud';
import { Card, CardItem, Phrase, Translation } from '@vocably/model';

export const addCardCandidates = (
  collection: Collection<Card>,
  cardCandidates: Card[]
): CardItem[] => {
  const addItem = makeCreate(collection);

  return cardCandidates.map((card) => {
    const existingItem = collection.find(
      (collectionItem) =>
        collectionItem.data.sideA.toLowerCase() === card.sideA.toLowerCase()
    );

    if (existingItem === undefined) {
      return addItem(card);
    }

    return existingItem;
  });
};

export const createCards = (
  collection: Collection<Card>,
  phrase: Phrase,
  translation: Translation
): CardItem[] => {
  if (translation.lexicala === undefined || translation.lexicala.length === 0) {
    return addCardCandidates(collection, [
      {
        language: translation.language,
        sideA: phrase.phrase,
        sideB: translation.text,
      },
    ]);
  }

  return addCardCandidates(
    collection,
    translation.lexicala.map((lexicalaItem) => ({
      language: translation.language,
      sideA: lexicalaItem.headword.text,
      sideB: lexicalaItem.senses.map((s) => s.definition).join('\n'),
    }))
  );
};
