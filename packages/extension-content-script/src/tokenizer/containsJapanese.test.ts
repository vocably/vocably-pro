import { containsJapanese } from './containsJapanese';

describe('containsJapanese', () => {
  it('works with Chinese', () => {
    expect(containsJapanese('这是一个基于Node.js,的中文分词模块。')).toEqual(
      true
    );
  });
});
