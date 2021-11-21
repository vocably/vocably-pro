import { Auth } from '@aws-amplify/auth';
import { registerExtensionStorage } from 'aws-cognito-chrome-extension';
import { onIsLoggedInRequest } from '@vocably/extension-messages';

const storage = registerExtensionStorage('sync');

Auth.configure({
  region: process.env.AUTH_REGION,
  userPoolId: process.env.AUTH_USER_POOL_ID,
  userPoolWebClientId: process.env.AUTH_USER_POOL_WEB_CLIENT_ID,
  storage,
});

onIsLoggedInRequest(async (sendResponse) => {
  const isLoggedIn = await Auth.currentSession()
    .then(() => true)
    .catch(() => false);

  return sendResponse(isLoggedIn);
});
