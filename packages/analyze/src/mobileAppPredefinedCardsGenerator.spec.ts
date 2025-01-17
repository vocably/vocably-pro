import '@vocably/jest';
import { ChatGPTLanguages } from '@vocably/model';
import { googleTranslate } from './googleTranslate';
import { generateAppPredefinedCards } from './mobileAppPredfinedCardsGenerator';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('exampleGenerator', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  xit('generate words', async () => {
    const allTranslations: Record<string, any> = {};

    const words = [
      'integrity',
      'resilience',
      'threshold',
      'disposition',
      'repercussion',
      'outcome',
      'acknowledge',
      'consider',
      'devote',
      'justify',
      'neglect',
      'persuade',
      'gradually',
      'implicitly',
      'notably',
      'promptly',
      'roughly',
      'sufficiently',
      'persistent',
      'comprehensive',
      'delightful',
      'cautious',
      'reluctant',
      'significant',
    ];

    for (let chatGptLanguage of ChatGPTLanguages) {
      let translatedWords: string[] = [];
      for (let word of words) {
        const result = await googleTranslate(word, 'en', chatGptLanguage);
        console.log(result);
        if (result.success === false) {
          expect(true).toEqual(false);
          return;
        }
        translatedWords.push(result.value.target);
      }
      allTranslations[chatGptLanguage] = translatedWords;
    }

    console.log(allTranslations);
  }, 1_000_000_000);

  xit('generate stuff', async () => {
    await generateAppPredefinedCards();

    expect(true).toEqual(true);
  }, 1_000_000_000);
});
