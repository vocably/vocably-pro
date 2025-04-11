import { hardcodeTranslate } from './hardcodeTranslate';

describe('hardcodeTranslate', () => {
  it('works', async () => {
    expect(
      await hardcodeTranslate({
        source: 'herkennen',
        partOfSpeech: 'verb',
        sourceLanguage: 'nl',
        targetLanguage: 'en',
      })
    ).toEqual('recognize, identify');

    expect(
      await hardcodeTranslate({
        source: 'herkennen',
        partOfSpeech: 'verb',
        sourceLanguage: 'nl',
        targetLanguage: 'ru',
      })
    ).toEqual(null);
  });
});
