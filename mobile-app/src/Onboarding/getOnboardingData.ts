import {
  GoogleLanguage,
  MobileOnboardingData,
  MobileOnboardingDataCollection,
} from '@vocably/model';

export const getOnboardingData = (
  sourceLanguage: GoogleLanguage,
  targetLanguage: GoogleLanguage
): MobileOnboardingData => {
  let collection: MobileOnboardingDataCollection;
  if (sourceLanguage === 'en') {
    collection = require('./data/en').onboardingCollection;
  } else {
    collection = require('./data/en').onboardingCollection;
  }

  // @ts-ignore
  return collection[targetLanguage] ?? collection['en'];
};
