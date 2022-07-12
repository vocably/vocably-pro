import { extractItemTranslation } from './extractItemTranslation';

describe('extractItemTranslation', () => {
  describe('existing language', () => {
    it('respects single translation', () => {
      expect(
        extractItemTranslation(
          {
            senses: [
              {
                translations: {
                  en: {
                    text: 'test 1',
                  },
                },
              },
            ],
            language: 'nl',
            headword: {
              text: 'Test headword',
            },
            id: 'NL_123',
          },
          'en'
        )
      ).toEqual('test 1');
    });

    it('respects multiple translations', () => {
      expect(
        extractItemTranslation(
          {
            senses: [
              {
                translations: {
                  en: {
                    text: 'test 1',
                  },
                },
              },
              {
                translations: {
                  en: [
                    {
                      text: 'test 2',
                    },
                    { text: 'test 3' },
                  ],
                },
              },
            ],
            language: 'nl',
            headword: {
              text: 'Test headword',
            },
            id: 'NL_123',
          },
          'en'
        )
      ).toEqual('test 1, test 2, test 3');
    });
  });

  describe('non-existing language', () => {
    test('translation exists', () => {
      expect(
        extractItemTranslation(
          {
            senses: [
              {
                translations: {
                  ar: {
                    text: 'test 1',
                  },
                },
              },
            ],
            language: 'nl',
            headword: {
              text: 'Test headword',
            },
            id: 'NL_123',
          },
          'en'
        )
      ).toEqual(null);
    });

    test('translation does not exist', () => {
      expect(
        extractItemTranslation(
          {
            senses: [{}],
            language: 'nl',
            headword: {
              text: 'Test headword',
            },
            id: 'NL_123',
          },
          'en'
        )
      ).toEqual(null);
    });
  });
});
