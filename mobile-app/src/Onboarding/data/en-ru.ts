import { OnboardingData } from '../types';

export const onboardingData: OnboardingData = {
  welcomeScreenCard: {
    language: 'en',
    source: 'remarkable',
    ipa: 'rɪˈmɑrkəbəl',
    example: 'a remarkable achievement',
    definition: 'extraordinary or outstanding',
    translation: 'замечательный, выдающийся',
    partOfSpeech: 'adjective',
    tags: [],
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
        translation: 'прибытие',
        partOfSpeech: 'noun',
        tags: [],
      },
    ],
  },
};
