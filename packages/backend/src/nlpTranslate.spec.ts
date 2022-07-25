import { nlpTranslate } from './nlpTranslate';

describe('nlpTranslate', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('returns successful result', async () => {
    const result = await nlpTranslate('машина', 'ru', 'en');

    console.log(result);

    if (result.success === false) {
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.target).toContain('machine');
    expect(result.value.sourceLanguage).toEqual('ru');
  });

  it('works properly when source and target languages are the same', async () => {
    const result = await nlpTranslate('asylum', 'en', 'en');

    if (result.success === false) {
      console.log({ inappropriateResult: result });
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.target).toEqual('asylum');
    expect(result.value.sourceLanguage).toEqual('en');
  });
});
