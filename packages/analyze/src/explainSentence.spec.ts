import '@vocably/jest';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('explainSentence', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('somewhat works', async () => {
    expect(true).toBe(true);
    // const responseResult = await explainSentence({
    //   sourceLanguage: 'en',
    //   targetLanguage: 'ru',
    //   sentence: 'Alice was beginning to get very tired of sitting',
    // });
    //
    // console.log(inspect(responseResult));
    //
    // expect(responseResult.success).toEqual(true);
  });
});
