import { translateText } from './translateText';

describe('translateText', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('returns successful result', async () => {
    const result = await translateText('машина');

    if (result.success === false) {
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.text).toContain('car');
    expect(result.value.detectedLanguage).toEqual('ru');
  });

  it('considers input language', async () => {
    const result = await translateText('машина', 'nl');

    if (result.success === false) {
      console.log({ inappropriateResult: result });
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.text).toEqual('ашина');
    expect(result.value.detectedLanguage).toEqual(null);
  });
});
