import { get as calculateLevenshtein } from 'fast-levenshtein';
import { Headword } from '../lexicala';

export const extractHeadword = (
  source: string,
  headwords: Headword[]
): Headword =>
  [...headwords].sort(
    (a, b) =>
      calculateLevenshtein(source, a.text ?? '', { useCollator: true }) -
      calculateLevenshtein(source, b.text ?? '', { useCollator: true })
  )[0];
