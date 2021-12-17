import { Auth } from '@aws-amplify/auth';
import { configureApi, translate } from '@vocably/api';
import {
  onIsLoggedInRequest,
  onTranslationRequest,
} from '@vocably/extension-messages';

type RegisterServiceWorkerOptions = {
  auth: Parameters<typeof Auth.configure>[0];
  api: Parameters<typeof configureApi>[0];
};
export const registerServiceWorker = (
  registerServiceWorkerOptions: RegisterServiceWorkerOptions
) => {
  Auth.configure(registerServiceWorkerOptions.auth);
  configureApi(registerServiceWorkerOptions.api);

  onIsLoggedInRequest(async (sendResponse) => {
    const isLoggedIn = await Auth.currentSession()
      .then(() => true)
      .catch(() => false);

    return sendResponse(isLoggedIn);
  });

  onTranslationRequest(async (sendResponse, phrase) => {
    const translation = await translate(phrase);
    return sendResponse(translation);
  });
};
