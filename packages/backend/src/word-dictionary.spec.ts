import { wordDictionary } from "./word-dictionary";
import { inspect } from "./utils/inspect";

describe('wordDictionary', () => {
  it('successfully fetches data from Word Dictionary', async () => {
    const result = await wordDictionary('stipulation');
    console.log(inspect(result));
    expect(result.success).toBe(true);
  })
})
