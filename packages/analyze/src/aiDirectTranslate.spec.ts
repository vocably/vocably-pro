import '@vocably/jest';
import { aiDirectTranslate } from './aiDirectTranslate';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('aiDirectTranslate', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('properly translate a word', async () => {
    const result = await aiDirectTranslate({
      source: 'cover',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });

    if (result.success !== true) {
      expect(result.reason).toBeFalsy();
      return;
    }

    expect(result.value.source).toBe('cover');
    expect(result.value.partOfSpeech).toBe('noun');
    expect(result.value.sourceLanguage).toBe('en');
    expect(result.value.targetLanguage).toBe('ru');
  });

  it('properly translates and corrects a phrase', async () => {
    const result = await aiDirectTranslate({
      source: 'iedr nadeel heeft zijn vordeel',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });

    if (result.success !== true) {
      expect(result.reason).toBeFalsy();
      return;
    }

    expect(result.value.source).toHaveSomeOf([
      'iedere nadeel heeft zijn voordeel',
      'ieder nadeel heeft zijn voordeel',
    ]);
    expect(result.value.partOfSpeech).toHaveSomeOf(['phrase', 'proverb']);
    expect(result.value.target).toBe('every disadvantage has its advantage');
    expect(result.value.sourceLanguage).toBe('nl');
    expect(result.value.targetLanguage).toBe('en');
  });

  it('properly translates and corrects', async () => {
    const result = await aiDirectTranslate({
      source: 'betise',
      sourceLanguage: 'fr',
      targetLanguage: 'en',
    });

    if (result.success !== true) {
      expect(result.reason).toBeFalsy();
      return;
    }

    expect(result.value.source).toBe('bêtise');
    expect(result.value.partOfSpeech).toBe('noun');
  });

  it('properly translates and corrects', async () => {
    const result = await aiDirectTranslate({
      source: 'betise',
      sourceLanguage: 'fr',
      targetLanguage: 'en',
    });

    if (result.success !== true) {
      expect(result.reason).toBeFalsy();
      return;
    }

    expect(result.value.source).toBe('bêtise');
    expect(result.value.partOfSpeech).toBe('noun');
  });

  it('properly translates and corrects russian', async () => {
    const result = await aiDirectTranslate({
      source: 'еж',
      sourceLanguage: 'ru',
      targetLanguage: 'en',
    });

    if (result.success !== true) {
      expect(result.reason).toBeFalsy();
      return;
    }

    expect(result.value.source).toHaveSomeOf(['ёж', 'еж']);
    expect(result.value.target).toEqual('hedgehog');
    expect(result.value.partOfSpeech).toBe('noun');
  });

  it('properly translates and corrects portuguese', async () => {
    const result = await aiDirectTranslate({
      source: 'dadiva',
      sourceLanguage: 'pt',
      targetLanguage: 'en',
    });

    if (result.success !== true) {
      expect(result.reason).toBeFalsy();
      return;
    }

    expect(result.value.source).toBe('dádiva');
    expect(result.value.partOfSpeech).toBe('noun');
  });

  it('properly translates and corrects english to russian', async () => {
    const result = await aiDirectTranslate({
      source: 'Something, and something else.',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });

    if (result.success !== true) {
      expect(result.reason).toBeFalsy();
      return;
    }

    expect(result.value.source).toBe('Something, and something else.');
    expect(result.value.target).toHaveSomeOf([
      'Что-то, и что-то еще.',
      'Что-то, и что-то другое.',
    ]);
    expect(result.value.partOfSpeech).toBe('phrase');
  });

  it('properly translates and corrects pt', async () => {
    const result = await aiDirectTranslate({
      source: 'e sua cidade',
      sourceLanguage: 'pt',
      targetLanguage: 'ru',
    });

    if (result.success !== true) {
      expect(result.reason).toBeFalsy();
      return;
    }

    expect(result.value.source).toBe('e sua cidade');
    expect(result.value.target).toHaveSomeOf(['и ваш город', 'и его город']);
    expect(result.value.partOfSpeech).toBe('phrase');
  });

  it('fixes english spelling', async () => {
    const result = await aiDirectTranslate({
      source: 'sissors',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });

    if (result.success !== true) {
      expect(result.reason).toBeFalsy();
      return;
    }

    expect(result.value.source).toBe('scissors');
    expect(result.value.target).toHaveSomeOf(['ножницы']);
    expect(result.value.partOfSpeech).toBe('noun');
  });
});
