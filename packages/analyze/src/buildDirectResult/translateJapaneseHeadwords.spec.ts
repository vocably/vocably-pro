import { configureTestAnalyzer } from '../test/configureTestAnalyzer';
import { translateJapaneseHeadwords } from './translateJapaneseHeadwords';

configureTestAnalyzer();
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
        target: 'google mama',
        sourceLanguage: 'ja',
        targetLanguage: 'en',
      },
      lexicalaItem: {
        senses: [
          {
            translations: {
              en: {
                text: 'mama',
              },
            },
          },
        ],
      },
    });

    expect(translationResult).toEqual({
      success: true,
      value: 'mama',
    });
  });

  it('uses kanji to translate', async () => {
    const translationResult = await translateJapaneseHeadwords({
      japaneseHeadwords: {
        romaji: 'hai',
        hiragana: 'はい',
        kanji: '肺',
      },
      translation: {
        source: 'はい',
        target: 'yes',
        sourceLanguage: 'ja',
        targetLanguage: 'en',
      },
      lexicalaItem: {
        senses: [],
      },
    });

    expect(translationResult).toEqual({
      success: true,
      value: 'lung',
    });
  });

  it('uses english as proxy language', async () => {
    const translationResult = await translateJapaneseHeadwords({
      japaneseHeadwords: {
        romaji: 'hai',
        hiragana: 'はい',
      },
      translation: {
        source: 'はい',
        target: 'да',
        sourceLanguage: 'ja',
        targetLanguage: 'ru',
      },
      lexicalaItem: {
        senses: [
          {
            translations: {
              en: {
                text: 'lung',
              },
            },
          },
        ],
      },
    });

    expect(translationResult).toEqual({
      success: true,
      value: 'легкое',
    });
  });
});
