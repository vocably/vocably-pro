import { OnboardingData } from '../types';

export const onboardingData: OnboardingData = {
  welcomeScreenCard: {
    source: 'something in german',
    definition: '',
    example: '',
    ipa: 'something',
    partOfSpeech: 'noun',
    tags: [],
    language: 'en',
    translation: 'Something',
  },
  directTranslationExample: {
    sourceLanguage: 'en',
    targetLanguage: 'ru',
    isReversed: false,
    text: 'arrive',
    results: [
      {
        language: 'en',
        source: 'arrive',
        ipa: 'əˈraɪv',
        example:
          "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
        definition: '* to reach a place\n* to begin to exist\n* to be born',
        translation: 'прибыть',
        partOfSpeech: 'verb',
        tags: [],
      },
      {
        language: 'en',
        source: 'arrival',
        ipa: 'əˈraɪvəl',
        example: "* the train's arrival\n* the arrival of summer",
        definition: '* the time of getting to a place\n* the beginning of',
        translation: 'приход',
        partOfSpeech: 'noun',
        tags: [],
      },
    ],
  },
};
