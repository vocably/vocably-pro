import { wordDictionary } from "./word-dictionary";
import { inspect } from "./utils/inspect";

describe('wordDictionary', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('successfully fetches data from Word Dictionary', async () => {
    const result = await wordDictionary('stipulation');
    console.log(inspect(result));
    expect(result.success).toBe(true);
  })
})
