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

    expect(
      addArticle('es', {
        text: 'aqua',
        pos: 'noun',
        gender: 'feminine',
      })
    ).toEqual('el aqua');

    expect(
      addArticle('es', {
        text: 'chica',
        pos: 'noun',
        gender: 'feminine',
      })
    ).toEqual('la chica');

    expect(
      addArticle('es', {
        text: 'estudiante',
        pos: 'noun',
        gender: 'masculine-feminine',
      })
    ).toEqual('el/la estudiante');

    expect(
      addArticle('es', {
        text: 'chico',
        pos: 'noun',
        gender: 'masculine',
      })
    ).toEqual('el chico');

    expect(
      addArticle('it', {
        pos: 'noun',
        gender: 'masculine',
        text: 'libro',
      })
    ).toEqual('il libro');

    expect(
      addArticle('it', {
        pos: 'noun',
        gender: 'masculine',
        text: 'studente',
      })
    ).toEqual('lo studente');

    expect(
      addArticle('it', {
        pos: 'noun',
        gender: 'masculine',
        text: 'zaino',
      })
    ).toEqual('lo zaino');

    expect(
      addArticle('it', {
        pos: 'noun',
        gender: 'masculine',
        text: 'amico',
      })
    ).toEqual("l'amico");

    expect(
      addArticle('it', {
        pos: 'noun',
        gender: 'feminine',
        text: 'casa',
      })
    ).toEqual('la casa');

    expect(
      addArticle('it', {
        pos: 'noun',
        gender: 'feminine',
        text: 'isola',
      })
    ).toEqual("l'isola");
  });
});
