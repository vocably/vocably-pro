import { analyze } from './lexicala';
import { inspect } from './utils/inspect';

describe('lexicala', () => {
  it('should work properly', async () => {
    const analyzeResult = await analyze('nl', 'dankjewel');
    console.log(inspect({ analyzeResult }));
    expect(analyzeResult.success).toBeTruthy();
  });
});
