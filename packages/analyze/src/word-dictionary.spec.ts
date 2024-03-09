import { inspect } from '@vocably/node-sulna';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';
import { wordDictionary } from './word-dictionary';

configureTestAnalyzer();

describe('wordDictionary', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('successfully fetches data from Word Dictionary', async () => {
    const result = await wordDictionary('stipulation');
    console.log(inspect(result));
    expect(result.success).toBe(true);
  });
});
