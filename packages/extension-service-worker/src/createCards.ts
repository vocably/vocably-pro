import { Collection, makeCreate } from '@vocably/crud';
import { Card, CardItem, Phrase, Translation } from '@vocably/model';
import { createSrsItem } from '@vocably/srs';
import { join } from '@vocably/sulna';

const byCard =
  (card: Card) =>
  (item: CardItem): boolean => {
    return (
      item.data.sideA.toLowerCase() === card.sideA.toLowerCase() &&
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

    return existingItem;
  });
};

export const createCards = (
  collection: Collection<Card>,
  phrase: Phrase,
  translation: Translation
): CardItem[] => {
  const srsItem = createSrsItem();

  if (translation.lexicala === undefined || translation.lexicala.length === 0) {
    return addCardCandidates(collection, [
      {
        language: translation.language,
        sideA: phrase.phrase,
        sideB: translation.text,
        ...srsItem,
      },
    ]);
  }

  return addCardCandidates(
    collection,
    translation.lexicala.map((lexicalaItem) => {
      const headword = Array.isArray(lexicalaItem.headword)
        ? lexicalaItem.headword[0]
        : lexicalaItem.headword;
      return {
        language: translation.language,
        sideA: headword.text,
        sideB: join(lexicalaItem.senses.map((s) => s.definition)),
        partOfSpeech: headword.pos,
        ...srsItem,
      };
    })
  );
};
