import { GoogleLanguage, isGoogleLanguage } from '@vocably/model';

const defaultLanguage = 'en';

export const detectTargetLanguage = (): GoogleLanguage => {
  const userLocale = navigator.language;
  if (!userLocale) {
    return defaultLanguage;
  }

  const userLanguage = userLocale.split('-')[0];

  if (!isGoogleLanguage(userLanguage)) {
    return defaultLanguage;
  }

  return userLanguage;
};
