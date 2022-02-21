import { extractUniqueHeadwords } from './extractUniqueHeadwords';

describe('extractUniqueHeadwords', () => {
  it('respects empty array', () => {
    expect(extractUniqueHeadwords([])).toEqual([]);
  });

  it('extracts unique headwords respecting duplicates and undefined', () => {
    expect(
      extractUniqueHeadwords([
        {
          headword: {},
        },
        {
          headword: { text: 'word1' },
        },
        {
          headword: [{ text: 'word2' }, {}, { text: 'word3' }],
        },
        {
          headword: { text: 'word2' },
        },
        {
          headword: [{ text: 'word3' }, {}, { text: 'word4' }],
        },
      ])
    ).toEqual(['word1', 'word2', 'word3', 'word4']);
  });
});
