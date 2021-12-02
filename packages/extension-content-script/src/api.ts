import {
  isLoggedIn as isLoggedInMessage,
  translate as translateMessage,
} from '@vocably/extension-messages';

export type ApiOptions = {
  isLoggedIn: typeof isLoggedInMessage;
  translate: typeof translateMessage;
};

export const api: ApiOptions = {
  isLoggedIn: isLoggedInMessage,
  translate: translateMessage,
};

export const configureApi = (options: Partial<ApiOptions>) => {
  Object.assign(api, options);
};
