import { prependTranslation } from './prependTranslation';

describe('prependTranslation', () => {
  it('prepends unique to analysis items', () => {
    const items = prependTranslation([], {
      source: 'hello',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      target: 'привет',
    });

    expect(items).toEqual([
      {
        source: 'hello',
        translation: 'привет',
        definitions: [],
      },
    ]);
  });

  it('doesnt add translation if it already exists in the items result', () => {
    const items = prependTranslation(
      [
        {
          source: 'peep',
          translation: 'подглядывать',
          partOfSpeech: 'verb',
          definitions: [
            'to take a quick look at something, especially secretly',
          ],
        },
      ],
      {
        source: 'peep',
        sourceLanguage: 'en',
        targetLanguage: 'ru',
        target: 'подглядывать',
      }
    );

    expect(items).toEqual([
      {
        source: 'peep',
        translation: 'подглядывать',
        partOfSpeech: 'verb',
        definitions: ['to take a quick look at something, especially secretly'],
      },
    ]);
  });

  it('skipps adding translation if item translation is similar language and item translation is empty', () => {
    const items = prependTranslation(
      [
        {
          source: 'peep',
          translation: '',
          partOfSpeech: 'verb',
          definitions: [
            'to take a quick look at something, especially secretly',
          ],
        },
      ],
      {
        source: 'peep',
        sourceLanguage: 'en',
        targetLanguage: 'en',
        target: 'peep',
      }
    );

    expect(items).toEqual([
      {
        source: 'peep',
        translation: '',
        partOfSpeech: 'verb',
        definitions: ['to take a quick look at something, especially secretly'],
      },
    ]);
  });

  it('skipps adding translation if sources are matched not considering articles', () => {
    const items = prependTranslation(
      [
        {
          source: 'de kamer',
          translation: 'room',
          partOfSpeech: 'noun',
          definitions: ['ruimte in een gebouw'],
        },
      ],
      {
        source: 'kamer',
        sourceLanguage: 'nl',
        targetLanguage: 'en',
        target: 'room',
      }
    );

    expect(items).toEqual([
      {
        source: 'de kamer',
        translation: 'room',
        partOfSpeech: 'noun',
        definitions: ['ruimte in een gebouw'],
      },
    ]);
  });

  it('merges translations when source is and the item are the only match', () => {
    const items = prependTranslation(
      [
        {
          source: 'de kamer',
          translation: 'room',
          partOfSpeech: 'noun',
          definitions: ['ruimte in een gebouw'],
        },
      ],
      {
        source: 'kamer',
        sourceLanguage: 'nl',
        targetLanguage: 'en',
        target: 'somethingroom',
      }
    );

    expect(items).toEqual([
      {
        source: 'de kamer',
        translation: 'room, somethingroom',
        partOfSpeech: 'noun',
        definitions: ['ruimte in een gebouw'],
      },
    ]);
  });

  it('merges translations when translation and takes care of non-existing translations', () => {
    const items = prependTranslation(
      [
        {
          source: 'beginning',
          translation: '',
          partOfSpeech: 'noun',
          definitions: ['an early part of a process or time'],
        },
      ],
      {
        source: 'beginning',
        sourceLanguage: 'en',
        targetLanguage: 'ru',
        target: 'начало',
        partOfSpeech: 'noun',
      }
    );

    expect(items).toEqual([
      {
        source: 'beginning',
        translation: 'начало',
        partOfSpeech: 'noun',
        definitions: ['an early part of a process or time'],
      },
    ]);
  });
});
