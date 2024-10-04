import { CardItem } from '@vocably/model';
import { get, shuffle } from 'lodash-es';

const posMap = {
  adjective: ['adjective', 'adverb'],
  adverb: ['adjective', 'adverb'],
};

export const getMultiChoice = (
  card: CardItem,
  collection: CardItem[]
): CardItem[] => {
  if (!card.data.partOfSpeech) {
    return [];
  }

  const allowedPartsOfSpeech: string[] = get(posMap, card.data.partOfSpeech, [
    card.data.partOfSpeech,
  ]);

  const candidates = collection
    .filter((collectionItem) => {
      if (collectionItem.id === card.id) {
        return false;
      }

      return allowedPartsOfSpeech.includes(collectionItem.data.partOfSpeech);
    })
    .sort();

  if (candidates.length < 3) {
    return [];
  }

  return shuffle(candidates).slice(0, 3);
};
