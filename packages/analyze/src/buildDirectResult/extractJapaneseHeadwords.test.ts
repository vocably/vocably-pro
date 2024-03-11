import { extractJapaneseHeadwords } from './extractJapaneseHeadwords';

describe('extractJapaneseHeadwords', () => {
  it('extracts all', () => {
    const japaneseHeadwords = extractJapaneseHeadwords({
      text: 'hahaoya',
      alternative_scripts: [
        { type: 'hiragana', text: 'ははおや' },
        { type: 'kanji', text: '母親' },
      ],
    });

    expect(japaneseHeadwords).toEqual({
      romaji: 'hahaoya',
      hiragana: 'ははおや',
      kanji: '母親',
    });
  });

  it('automatically converts romaji to hiragana', () => {
    const japaneseHeadwords = extractJapaneseHeadwords({
      text: 'hahaoya',
    });

    expect(japaneseHeadwords).toEqual({
      romaji: 'hahaoya',
      hiragana: 'ははおや',
    });
  });

  it('omits kanji', () => {
    const japaneseHeadwords = extractJapaneseHeadwords({
      text: 'hahaoya',
      alternative_scripts: [{ type: 'hiragana', text: 'ははおや' }],
    });

    expect(japaneseHeadwords).toEqual({
      romaji: 'hahaoya',
      hiragana: 'ははおや',
    });
  });
});
