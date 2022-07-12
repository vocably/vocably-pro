import { Headword, LexicalaSearchResultItem } from '../lexicala';

export const extractHeadword = (item: LexicalaSearchResultItem): Headword =>
  Array.isArray(item.headword) ? item.headword[0] : item.headword;
