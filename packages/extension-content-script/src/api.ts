import {
  addCard,
  analyze,
  cleanUp,
  getInternalProxyLanguage,
  getInternalSourceLanguage,
  isActive,
  isEligibleForTrial,
  isLoggedIn,
  isUserKnowsHowToAdd,
  listLanguages,
  ping,
  removeCard,
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
  isEligibleForTrial,
  isUserKnowsHowToAdd,
  setUserKnowsHowToAdd,
};

export type ApiConfigOptions = Partial<typeof api>;

export const configureApi = (options: Partial<ApiConfigOptions>) => {
  Object.assign(api, options);
};
