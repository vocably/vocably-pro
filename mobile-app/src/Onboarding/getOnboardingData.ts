import {
  GoogleLanguage,
  MobileOnboardingData,
  MobileOnboardingDataCollection,
} from '@vocably/model';

const getOnboardingCollection = (
  sourceLanguage: GoogleLanguage
): MobileOnboardingDataCollection => {
  switch (sourceLanguage) {
    case 'ar':
      return require('./data/ar').onboardingCollection;
    case 'da':
      return require('./data/da').onboardingCollection;
    case 'de':
      return require('./data/de').onboardingCollection;
    case 'el':
      return require('./data/el').onboardingCollection;
    case 'en':
      return require('./data/en').onboardingCollection;
    case 'es':
      return require('./data/es').onboardingCollection;
    case 'fa':
      return require('./data/fa').onboardingCollection;
    case 'fi':
      return require('./data/fi').onboardingCollection;
    case 'fr':
      return require('./data/fr').onboardingCollection;
    case 'he':
      return require('./data/he').onboardingCollection;
    case 'hi':
      return require('./data/hi').onboardingCollection;
    case 'id':
      return require('./data/id').onboardingCollection;
    case 'it':
      return require('./data/it').onboardingCollection;
    case 'ja':
      return require('./data/ja').onboardingCollection;
    case 'ko':
      return require('./data/ko').onboardingCollection;
    case 'ms':
      return require('./data/ms').onboardingCollection;
    case 'nl':
      return require('./data/nl').onboardingCollection;
    case 'no':
      return require('./data/no').onboardingCollection;
    case 'pl':
      return require('./data/pl').onboardingCollection;
    case 'pt':
      return require('./data/pt').onboardingCollection;
    case 'ru':
      return require('./data/ru').onboardingCollection;
    case 'sv':
      return require('./data/sv').onboardingCollection;
    case 'th':
      return require('./data/th').onboardingCollection;
    case 'tr':
      return require('./data/tr').onboardingCollection;
    case 'uk':
      return require('./data/uk').onboardingCollection;
    case 'vi':
      return require('./data/vi').onboardingCollection;
    case 'zh':
      return require('./data/zh').onboardingCollection;
    case 'zh-TW':
      return require('./data/zh-TW').onboardingCollection;
    default:
      return require('./data/de').onboardingCollection;
  }
};

export const getOnboardingData = (
  sourceLanguage: GoogleLanguage,
  targetLanguage: GoogleLanguage
): MobileOnboardingData => {
  const collection = getOnboardingCollection(sourceLanguage);
  return collection[targetLanguage] ?? collection['en'];
};
