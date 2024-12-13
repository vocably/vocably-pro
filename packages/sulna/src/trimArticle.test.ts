import { trimArticle } from './trimArticle';

describe('trimArticle', () => {
  it('nl', () => {
    expect(trimArticle('nl', 'test')).toEqual({ source: 'test' });
    expect(trimArticle('nl', 'de test')).toEqual({
      source: 'test',
    });
    expect(trimArticle('nl', 'HET    test')).toEqual({
      source: 'test',
    });
    expect(trimArticle('nl', 'detest')).toEqual({
      source: 'detest',
    });
  });

  it('any', () => {
    expect(trimArticle('en', 'test')).toEqual({ source: 'test' });
    expect(trimArticle('en', 'the test')).toEqual({
      source: 'the test',
    });
  });

  it('italian', () => {
    expect(trimArticle('it', "l'isola")).toEqual({
      source: 'isola',
    });

    expect(trimArticle('it', 'lo studente')).toEqual({
      source: 'studente',
    });
  });
});
