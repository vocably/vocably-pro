import { Auth } from '@aws-amplify/auth';
import { registerExtensionStorage } from 'aws-cognito-chrome-extension';
import {
  onIsLoggedInRequest,
  onTranslationRequest,
} from '@vocably/extension-messages';
import { configureClient, translate } from '@vocably/api';

const storage = registerExtensionStorage('sync');

Auth.configure({
  region: process.env.AUTH_REGION,
  userPoolId: process.env.AUTH_USER_POOL_ID,
  userPoolWebClientId: process.env.AUTH_USER_POOL_WEB_CLIENT_ID,
  storage,
});

configureClient({
  baseUrl: 'https://api.vocably.pro',
});

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
