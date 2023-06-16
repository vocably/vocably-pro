import { combineItems, combineTranslations } from './combineItems';

describe('combineTranslations', () => {
  it('properly combines translations', () => {
    const t1 = 'one, two, three';
    const t2 = 'two, ThRee, four';

    expect(combineTranslations(t1, t2)).toEqual('one, two, three, four');
  });
});

describe('combineItems', () => {
  it('properly combines items', () => {
    const items = [
      {
        source: 'do',
        definitions: ['делать'],
        translation: 'делать',
        partOfSpeech: 'verb',
      },
      {
        source: 'do',
        definitions: ['делать'],
        translation: 'предлог-делать',
        partOfSpeech: 'adjective',
      },
    ];

    const item = {
      source: 'do',
      definitions: ['делать', 'бзделать'],
      translation: 'делать',
      partOfSpeech: 'verb',
    };

    expect(combineItems(items, item)).toEqual([
      {
        source: 'do',
        definitions: ['делать', 'бзделать'],
        translation: 'делать',
        partOfSpeech: 'verb',
      },
      {
        source: 'do',
        definitions: ['делать'],
        translation: 'предлог-делать',
        partOfSpeech: 'adjective',
      },
    ]);
  });
});
