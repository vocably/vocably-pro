import { AppAuthStorage } from '@vocably/pontis';
import { environment } from './environments/environment';
import { merge } from 'lodash-es';

export const autoSignInPath = 'hands-free';
export const signInConfirmationPath = 'signed-in';

const constructRedirectSignInUrl = (): string => {
  const basePath = `${location.protocol}//${location.host}`;
  const currentPath = location.pathname.substring(1);

  if ([autoSignInPath, signInConfirmationPath].includes(currentPath)) {
    return basePath + `/${signInConfirmationPath}`;
  }

  return basePath;
};

export const authConfig = {
  storage: new AppAuthStorage(environment.chromeExtensionId),
  ...merge(
    {
      oauth: {
        redirectSignIn: constructRedirectSignInUrl(),
        redirectSignOut: `${location.protocol}//${location.host}`,
      },
    },
    environment.auth
  ),
};
