import { Headword } from '../lexicala';
import { extractHeadword } from './extractHeadword';

describe('extractHeadword', () => {
  it('should return the headword with the lowest levenshtein distance', () => {
    const headwords: Headword[] = [
      {
        text: 'fax',
        pos: 'noun',
      },
      {
        text: 'fax machine',
        pos: 'noun',
      },
    ];
    expect(extractHeadword('machine', headwords)).toEqual(headwords[1]);
  });
});
