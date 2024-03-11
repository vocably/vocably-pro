import { translateJapaneseHeadwords } from './translateJapaneseHeadwords';

describe('translateJapaneseHeadwords', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('uses already translated text [romaji]', async () => {
    const translationResult = await translateJapaneseHeadwords({
      japaneseHeadwords: {
        romaji: 'hahaoya',
        hiragana: 'ははおや',
        kanji: '母親',
      },
      translation: {
        source: 'hahaoya',
        target: 'mama',
        sourceLanguage: 'ja',
        targetLanguage: 'en',
      },
    });

    expect(translationResult).toEqual({
      success: true,
      value: 'mama',
    });
  });

  it('uses already translated text [hiragana]', async () => {
    const translationResult = await translateJapaneseHeadwords({
      japaneseHeadwords: {
        romaji: 'hahaoya',
        hiragana: 'ははおや',
        kanji: '母親',
      },
      translation: {
        source: 'ははおや',
        target: 'mama',
        sourceLanguage: 'ja',
        targetLanguage: 'en',
      },
    });

    expect(translationResult).toEqual({
      success: true,
      value: 'mama',
    });
  });

  it('uses already translated text [kanji]', async () => {
    const translationResult = await translateJapaneseHeadwords({
      japaneseHeadwords: {
        romaji: 'hahaoya',
        hiragana: 'ははおや',
        kanji: '母親',
      },
      translation: {
        source: '母親',
        target: 'mama',
        sourceLanguage: 'ja',
        targetLanguage: 'en',
      },
    });

    expect(translationResult).toEqual({
      success: true,
      value: 'mama',
    });
  });

  it('translates from google', async () => {
    const translationResult = await translateJapaneseHeadwords({
      japaneseHeadwords: {
        romaji: 'hahaoya',
        hiragana: 'ははおや',
        kanji: '母親',
      },
      translation: {
        source: 'hahaya',
        target: 'mama',
        sourceLanguage: 'ja',
        targetLanguage: 'en',
      },
    });

    expect(translationResult).toEqual({
      success: true,
      value: 'mother',
    });
  });
});
