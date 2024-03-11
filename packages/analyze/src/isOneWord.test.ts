import { isOneWord } from './isOneWord';

describe('isOneWord', () => {
  it('shoud work properly', () => {
    expect(isOneWord('one', 'en')).toEqual(true);
    expect(isOneWord('one two', 'en')).toEqual(false);
    expect(isOneWord(`on\ttwo`, 'en')).toEqual(false);
    expect(isOneWord(`one\ntwo`, 'en')).toEqual(false);
  });

  it('properly handle Japanese', () => {
    expect(isOneWord('一', 'ja')).toEqual(true);
    expect(isOneWord('一 二', 'ja')).toEqual(false);
  });
});
