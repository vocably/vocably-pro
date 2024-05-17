import {
  addCard,
  analyze,
  askForRating,
  cleanUp,
  getInternalProxyLanguage,
  getInternalSourceLanguage,
  isActive,
  isEligibleForTrial,
  isLoggedIn,
  isUserKnowsHowToAdd,
  listLanguages,
  listTargetLanguages,
  ping,
  playSound,
  removeCard,
  saveAskForRatingResponse,
  setInternalProxyLanguage,
  setInternalSourceLanguage,
  setUserKnowsHowToAdd,
} from '@vocably/extension-messages';

export const api = {
  appBaseUrl: 'https://app.vocably.pro',
  isLoggedIn,
  getInternalProxyLanguage,
  setInternalProxyLanguage,
  getInternalSourceLanguage,
  setInternalSourceLanguage,
  analyze,
  addCard,
  removeCard,
  cleanUp,
  isActive,
  ping,
  listLanguages,
  listTargetLanguages,
  isEligibleForTrial,
  isUserKnowsHowToAdd,
  setUserKnowsHowToAdd,
  playSound,
  askForRating,
  saveAskForRatingResponse,
};

export type ApiConfigOptions = Partial<typeof api>;

export const configureApi = (options: Partial<ApiConfigOptions>) => {
  Object.assign(api, options);
};
