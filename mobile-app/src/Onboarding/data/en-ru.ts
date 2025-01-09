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
  reverseTranslationExample: {
    sourceLanguage: 'en',
    targetLanguage: 'ru',
    isReversed: true,
    text: 'вопрос',
    results: [
      {
        language: 'en',
        source: 'question',
        ipa: 'ˈkwɛstʃən',
        example:
          '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
        definition:
          '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
        partOfSpeech: 'noun',
        translation: 'вопрос',
        tags: [],
      },
      {
        language: 'en',
        source: 'query',
        ipa: 'ˈkwɪəri',
        example: 'I have a query about the arrangements for the trip.',
        definition: 'a question',
        partOfSpeech: 'noun',
        translation: 'вопрос, запрос',
        tags: [],
      },
    ],
  },
  contextTranslationExample: {
    text: 'The most *commonly* skipped maintenance tasks involves your war on dust. Your house is filled with filters and vents that capture dust and other stuff, increasing the lifespan of your systems and keeping the air clean. At least once a year you should clean and replace the following:',
    results: [
      {
        language: 'en',
        source: 'commonly',
        ipa: 'ˈkɒmənli',
        example: 'a belief commonly held in the area',
        definition: '',
        partOfSpeech: 'adverb',
        translation: 'обычно',
        tags: [],
      },
    ],
  },
};
