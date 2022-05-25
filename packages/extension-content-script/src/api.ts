import {
  isLoggedIn,
  analyze,
  cleanUp,
  isActive,
  ping,
  listLanguages,
} from '@vocably/extension-messages';

export const api = {
  appBaseUrl: 'https://app.vocably.pro',
  isLoggedIn,
  analyze,
  cleanUp,
  isActive,
  ping,
  listLanguages,
};

export type ApiConfigOptions = Partial<typeof api>;

export const configureApi = (options: Partial<ApiConfigOptions>) => {
  Object.assign(api, options);
};
