import {
  isLoggedIn,
  analyze,
  cleanUp,
  isActive,
  ping,
  listLanguages,
  isEligibleForTrial,
  getInternalProxyLanguage,
  setInternalProxyLanguage,
} from '@vocably/extension-messages';

export const api = {
  appBaseUrl: 'https://app.vocably.pro',
  isLoggedIn,
  getInternalProxyLanguage,
  setInternalProxyLanguage,
  analyze,
  cleanUp,
  isActive,
  ping,
  listLanguages,
  isEligibleForTrial,
};

export type ApiConfigOptions = Partial<typeof api>;

export const configureApi = (options: Partial<ApiConfigOptions>) => {
  Object.assign(api, options);
};
