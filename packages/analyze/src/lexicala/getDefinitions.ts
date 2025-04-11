import { isString } from 'lodash-es';
import { LexicalaSearchResultItem } from '../lexicala';

export const getDefinitions = (
  senses: LexicalaSearchResultItem['senses']
): string[] =>
  senses
    .map((s) => s.definition)
    .filter(isString)
    .slice(0, 3);
