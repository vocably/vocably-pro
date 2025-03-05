import { trimLanguage } from './trimLanguage';

describe('trimLanguage', () => {
  it('works', () => {
    expect(trimLanguage('English')).toEqual('English');
    expect(trimLanguage('English (Nonesnse)')).toEqual('English');
    expect(trimLanguage('Portuguese (Portugal, Brazil)')).toEqual('Portuguese');
    expect(trimLanguage('')).toEqual('');
  });
});
