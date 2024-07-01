import { updateLanguagePairs } from './languagePairs';

describe('LanguagePairs', () => {
  it('works with empty', () => {
    const newPairs = updateLanguagePairs(
      {},
      { sourceLanguage: 'en', translationLanguage: 'es', isReverse: false }
    );
    expect(newPairs).toEqual({
      en: {
        translationLanguage: 'es',
        availableLanguages: ['es'],
      },
    });
  });

  it('adds new target language', () => {
    const newPairs = updateLanguagePairs(
      {
        en: {
          translationLanguage: 'es',
          availableLanguages: ['es'],
        },
      },
      { sourceLanguage: 'en', translationLanguage: 'pt', isReverse: false }
    );
    expect(newPairs).toEqual({
      en: {
        translationLanguage: 'pt',
        availableLanguages: ['pt', 'es'],
      },
    });
  });

  it('properly adds previously used target language', () => {
    const newPairs = updateLanguagePairs(
      {
        en: {
          translationLanguage: 'es',
          availableLanguages: ['es', 'pt'],
        },
      },
      { sourceLanguage: 'en', translationLanguage: 'pt', isReverse: false }
    );
    expect(newPairs).toEqual({
      en: {
        translationLanguage: 'pt',
        availableLanguages: ['pt', 'es'],
      },
    });
  });
});
