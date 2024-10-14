import { googleTranslate } from './googleTranslate';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('googleTranslate', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('returns successful result', async () => {
    const result = await googleTranslate('машина', null, 'en');

    if (result.success === false) {
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.target).toHaveSomeOf('machine, car');
    expect(result.value.sourceLanguage).toHaveSomeOf('bg, ru');
  });

  it('works properly when source and target languages are the same', async () => {
    const result = await googleTranslate('asylum', 'en', 'en');

    if (result.success === false) {
      console.log({ inappropriateResult: result });
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.target).toEqual('asylum');
    expect(result.value.sourceLanguage).toEqual('en');
  });
});
