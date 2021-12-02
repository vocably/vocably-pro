import {
  isLoggedIn as isLoggedInMessage,
  translate as translateMessage,
} from '@vocably/extension-messages';

export const api = {
  isLoggedIn: isLoggedInMessage,
  translate: translateMessage,
};

export type ApiConfigOptions = Partial<typeof api>;

export const configureApi = (options: Partial<ApiConfigOptions>) => {
  Object.assign(api, options);
};
