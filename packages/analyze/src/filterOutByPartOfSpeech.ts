import { LexicalaSearchResultItemWithNormalHeadword } from './lexicala/normalizeHeadword';

export const filterOutByPartOfSpeech = (
  items: LexicalaSearchResultItemWithNormalHeadword[],
  partOfSpeech?: string
): LexicalaSearchResultItemWithNormalHeadword[] => {
  if (!partOfSpeech) {
    return items;
  }

  const filteredItems = items.filter(
    (item) =>
      !item.headword.pos ||
      item.headword.pos.toLowerCase() === partOfSpeech.toLowerCase()
  );

  if (filteredItems.length === 0) {
    return items;
  }

  return filteredItems;
};
