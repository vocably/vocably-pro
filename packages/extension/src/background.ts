import { Auth } from '@aws-amplify/auth';
import { registerExtensionStorage } from 'aws-cognito-chrome-extension';

const storage = registerExtensionStorage('sync');

Auth.configure({
  region: process.env.AUTH_REGION,
  userPoolId: process.env.AUTH_USER_POOL_ID,
  userPoolWebClientId: process.env.AUTH_USER_POOL_WEB_CLIENT_ID,
  storage,
});
