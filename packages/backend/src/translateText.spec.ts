import { translateText } from './translateText';

describe('translateText', () => {
  it('returns successful result', async () => {
    const result = await translateText('dankjewel');

    if (result.success === false) {
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.text).toEqual('thank you');
    expect(result.value.detectedLanguage).toEqual('nl');
  });
});
