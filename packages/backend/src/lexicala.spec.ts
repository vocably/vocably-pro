import { analyze } from './lexicala';
import { inspect } from './utils/inspect';

describe('lexicala', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('should work properly', async () => {
    const analyzeResult = await analyze('nl', 'dankjewel');
    console.log(inspect({ analyzeResult }));
    expect(analyzeResult.success).toBeTruthy();
  });
});
