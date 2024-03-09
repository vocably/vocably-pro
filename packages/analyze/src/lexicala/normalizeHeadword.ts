import { Headword, LexicalaSearchResultItem } from '../lexicala';
import { extractHeadword } from './extractHeadword';

export type LexicalaSearchResultItemWithNormalHeadword =
  LexicalaSearchResultItem & {
    headword: Headword;
  };
export const normalizeHeadword =
  (source: string) =>
  (
    item: LexicalaSearchResultItem
  ): LexicalaSearchResultItemWithNormalHeadword => {
    if (!Array.isArray(item.headword)) {
      return item;
    }

    return {
      ...item,
      headword: extractHeadword(source, item.headword),
    };
  };
