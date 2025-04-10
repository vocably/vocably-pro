import '@vocably/jest';
import { inspect } from '@vocably/node-sulna';
import { explainSentence } from './explainSentence';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('explainSentence', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('somewhat works', async () => {
    const responseResult = await explainSentence({
      sourceLanguage: 'nl',
      targetLanguage: 'en',
      sentence:
        'Grote reorganisatie bij Tata Steel, 1600 voltijdbanen verdwijnen',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);
  });
});
