import { configureTestAnalyzer } from './test/configureTestAnalyzer';
import { translateFromContext } from './translateFromContext';

configureTestAnalyzer();

describe('translateFromContext', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('river bank', async () => {
    const translationResult = await translateFromContext({
      source: 'bank',
      context:
        "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'",
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    expect(translationResult.success).toEqual(true);
    // @ts-ignore
    expect(translationResult.value.target).toEqual('берег');
  }, 60_000);

  it('out of context', async () => {
    const translationResult = await translateFromContext({
      source: 'doctor',
      context:
        "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'",
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    expect(translationResult.success).toEqual(true);
    // @ts-ignore
    expect(translationResult.value.target).toEqual('доктор');
  }, 60_000);

  it('multi word source', async () => {
    const translationResult = await translateFromContext({
      source: 'book her sister was reading',
      context:
        "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'",
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    expect(translationResult.success).toEqual(true);
    // @ts-ignore
    expect(translationResult.value.target).toEqual(
      'книга, которую читала ее сестра'
    );
  }, 60_000);
});
