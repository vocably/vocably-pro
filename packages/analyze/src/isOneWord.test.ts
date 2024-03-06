import { isOneWord } from './isOneWord';

describe('isOneWord', () => {
  it('shoud work properly', () => {
    expect(isOneWord('one')).toEqual(true);
    expect(isOneWord('one two')).toEqual(false);
    expect(isOneWord(`on\ttwo`)).toEqual(false);
    expect(isOneWord(`one\ntwo`)).toEqual(false);
  });
});
