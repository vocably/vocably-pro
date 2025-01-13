import '@vocably/jest';
import { nlpTranslate } from './nlpTranslate';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('nlpTranslate', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  xit('returns successful result', async () => {
    const result = await nlpTranslate('машина', 'ru', 'en');

    console.log(result);

    if (result.success === false) {
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.target).toHaveSomeOf('machine, car');
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
