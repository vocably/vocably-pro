import { Auth } from '@aws-amplify/auth';
import { registerExtensionStorage } from 'aws-cognito-chrome-extension';
import { onIsLoggedInRequest } from '@vocably/extension-messages';
import { configureClient, translate } from '@vocably/api';

const storage = registerExtensionStorage('sync');

Auth.configure({
  region: process.env.AUTH_REGION,
  userPoolId: process.env.AUTH_USER_POOL_ID,
  userPoolWebClientId: process.env.AUTH_USER_POOL_WEB_CLIENT_ID,
  storage,
});

configureClient({
  baseURL: 'https://api.vocably.pro',
});

translate()
  .then(console.log)
  .catch((e) => {
    console.error('Error during translation', e);
  });

onIsLoggedInRequest(async (sendResponse) => {
  const isLoggedIn = await Auth.currentSession()
    .then(() => true)
    .catch(() => false);

  return sendResponse(isLoggedIn);
});
