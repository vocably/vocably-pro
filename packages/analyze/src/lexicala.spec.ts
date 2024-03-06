import { inspect } from '@vocably/node-sulna';
import { lexicala } from './lexicala';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('lexicala', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('should work properly', async () => {
    const analyzeResult = await lexicala('nl', 'dankjewel');
    console.log(inspect({ analyzeResult }));
    expect(analyzeResult.success).toBeTruthy();
  });
});
