import { extractTokens } from './extractTokens';

describe('extractTokens', () => {
  it('extracts tokens from empty text', () => {
    expect(extractTokens('')).toEqual([]);
  });

  it('works with chinese', () => {
    expect(extractTokens('这是一个基于Node.js,的中文分词模块。')).toEqual(
      false
    );
  });

  it('works with Japanese', () => {
    expect(extractTokens('オンラインでNode.js日本語が', 'ja')).toEqual(false);
  });

  it('works with Korean', () => {
    expect(extractTokens('안녕하세요')).toEqual(false);
  });

  it('works with English', () => {
    expect(extractTokens('Hello world')).toEqual([
      { type: 'word', text: 'Hello' },
      { type: 'punctuation', text: ' ' },
      { type: 'word', text: 'world' },
    ]);
  });

  it('works with Korean', () => {
    expect(extractTokens('이화영 진술만으로')).toEqual(false);
  });

  it('works with Russian', () => {
    expect(extractTokens('конец мёлёдэц')).toEqual([
      { type: 'word', text: 'конец' },
      { type: 'punctuation', text: ' ' },
      { type: 'word', text: 'мёлёдэц' },
    ]);
  });
});
