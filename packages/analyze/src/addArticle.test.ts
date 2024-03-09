import { addArticle } from './addArticle';

describe('addArticle', () => {
  it('nl', () => {
    expect(
      addArticle('nl', {
        text: 'test',
        pos: 'noun',
        gender: 'masculine',
      })
    ).toEqual('de test');

    expect(
      addArticle('nl', {
        text: 'test',
        pos: 'noun',
        gender: 'feminine',
      })
    ).toEqual('de test');

    expect(
      addArticle('nl', {
        text: 'test',
        pos: 'noun',
        gender: 'masculine-neuter',
      })
    ).toEqual('de/het test');

    expect(
      addArticle('nl', {
        text: 'test',
        pos: 'verb',
      })
    ).toEqual('test');
  });

  it('any', () => {
    expect(
      addArticle('en', {
        text: 'test',
        pos: 'noun',
        gender: 'masculine-neuter',
      })
    ).toEqual('test');

    expect(
      addArticle('en', {
        text: 'test',
        pos: 'verb',
      })
    ).toEqual('test');
  });
});
