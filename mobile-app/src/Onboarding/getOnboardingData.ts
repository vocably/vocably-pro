import { OnboardingData } from './types';

export const getOnboardingData = (
  sourceLanguage: string,
  targetLanguage: string
): OnboardingData => {
  if (sourceLanguage === 'en') {
    if (targetLanguage === 'ru') {
      return require('./data/en-ru').onboardingData;
    }
  }

  return require('./data/de-en').onboardingData;
};
