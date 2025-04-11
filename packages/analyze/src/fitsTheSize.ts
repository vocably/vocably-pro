import { LexicalaSearchResultItemWithNormalHeadword } from './lexicala/normalizeHeadword';

export const fitsTheSize =
  (source: string) =>
  (item: LexicalaSearchResultItemWithNormalHeadword): boolean => {
    const sourceWordsNumber = source.split(/\W+/).length;
    const itemWordsNumber = (item.headword.text ?? '').split(/\W+/).length;

    return itemWordsNumber <= sourceWordsNumber;
  };
