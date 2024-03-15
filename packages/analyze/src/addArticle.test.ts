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

    expect(
      addArticle('no', {
        text: 'fugl',
        pos: 'noun',
        gender: 'masculine',
      })
    ).toEqual('en fugl');

    expect(
      addArticle('no', {
        text: 'hånd',
        pos: 'noun',
        gender: 'masculine-feminine',
      })
    ).toEqual('ei hånd');

    expect(
      addArticle('no', {
        text: 'hus',
        pos: 'noun',
        gender: 'neuter',
      })
    ).toEqual('et hus');
  });
});
