import { uniq } from 'lodash-es';
import { Headword, LexicalaSearchResultItem } from '../../lexicala';

export const extractUniqueHeadwords = (
  items: Pick<LexicalaSearchResultItem, 'headword'>[]
): string[] => {
  return uniq(
    items
      .map((item): Headword[] =>
        Array.isArray(item.headword) ? item.headword : [item.headword]
      )
      .flat()
      .map((headword) => headword.text)
      .filter((text) => text !== undefined)
  );
};
