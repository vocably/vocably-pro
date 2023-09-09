import { containsKorean } from './containsKorean';

describe('contains Korean', () => {
  it('contains Korean', () => {
    expect(containsKorean('안녕하세요')).toEqual(true);
  });

  it('contains not Chinese', () => {
    expect(containsKorean('于的')).toEqual(false);
  });

  it('contains Japanese', () => {
    expect(containsKorean('オンラインで')).toEqual(false);
  });

  it('contains English', () => {
    expect(containsKorean('Hello world')).toEqual(false);
  });
});
