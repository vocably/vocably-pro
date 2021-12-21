import { registerExtensionStorage } from '@vocably/pontis';
import { registerServiceWorker } from '@vocably/extension-service-worker';

const storage = registerExtensionStorage('sync');

registerServiceWorker({
  auth: {
    region: process.env.AUTH_REGION,
    userPoolId: process.env.AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.AUTH_USER_POOL_WEB_CLIENT_ID,
    identityPoolId: process.env.AUTH_IDENTITY_POOL_ID,
    storage,
  },
  api: {
    baseUrl: process.env.API_BASE_URL,
    region: process.env.API_REGION,
    cardsBucket: process.env.API_CARDS_BUCKET,
  },
});
