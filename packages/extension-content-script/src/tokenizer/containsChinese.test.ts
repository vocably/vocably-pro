import { containsChinese } from './containsChinese';

describe('containsChinese', () => {
  it('works with Chinese', () => {
    expect(containsChinese('这是一个基Node.js于的中文分词模块。')).toEqual(
      true
    );
  });

  it('works with Japanese', () => {
    expect(containsChinese('オンラインで')).toEqual(false);
  });

  it('works with English', () => {
    expect(containsChinese('Hello world')).toEqual(false);
  });
});
