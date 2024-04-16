import { LexicalaSearchResultItem } from '../lexicala';

export const getDefinitions = (senses: LexicalaSearchResultItem['senses']) =>
  senses
    .slice(0, 3)
    .filter((s) => s.definition)
    .map((s) => s.definition);
