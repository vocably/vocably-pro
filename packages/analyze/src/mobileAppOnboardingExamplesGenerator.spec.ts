import '@vocably/jest';
import { ChatGPTLanguages } from '@vocably/model';
import { googleTranslate } from './googleTranslate';
import { generateAppOnboardingExamples } from './mobileAppOnboardingExamplesGenerator';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('exampleGenerator', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  xit('generate words', async () => {
    const allTranslations: Record<string, any> = {};

    for (let chatGptLanguage of ChatGPTLanguages) {
      const result = await googleTranslate('question', 'en', chatGptLanguage);
      console.log(result);
      if (result.success === false) {
        expect(true).toEqual(false);
        return;
      }

      allTranslations[chatGptLanguage] = result.value.target;
    }

    console.log(allTranslations);
  }, 1_000_000_000);

  xit('generate stuff', async () => {
    for (let chatGptLanguage of ChatGPTLanguages) {
      await generateAppOnboardingExamples(chatGptLanguage);
    }
    expect(true).toEqual(true);
  }, 1_000_000_000);
});
