import { analyze } from './lexicala';

describe('lexicala', () => {
  it('should work properly', async () => {
    const analyzeResult = await analyze('nl', 'dankjewel');
    console.log({ analyzeResult });
    expect(analyzeResult.success).toBeTruthy();
  });
});
