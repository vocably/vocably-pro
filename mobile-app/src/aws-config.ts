import { ResourcesConfig } from '@aws-amplify/core';
import {
  AWS_CONFIG_IDENTITY_POOL_ID,
  AWS_CONFIG_OAUTH_DOMAIN,
  AWS_CONFIG_PROJECT_REGION,
  AWS_CONFIG_USER_POOLS_ID,
  AWS_CONFIG_USER_POOLS_WEB_CLIENT_ID,
  AWS_PINPOINT_PROJECT_ID,
} from '@env';

export const awsConfig: ResourcesConfig = {
  Notifications: {
    PushNotification: {
      Pinpoint: {
        region: AWS_CONFIG_PROJECT_REGION,
        appId: AWS_PINPOINT_PROJECT_ID,
      },
    },
  },
  Auth: {
    Cognito: {
      allowGuestAccess: true,
      userPoolClientId: AWS_CONFIG_USER_POOLS_WEB_CLIENT_ID,
      userPoolId: AWS_CONFIG_USER_POOLS_ID,
      identityPoolId: AWS_CONFIG_IDENTITY_POOL_ID,
      loginWith: {
        oauth: {
          domain: AWS_CONFIG_OAUTH_DOMAIN,
          scopes: [
            'email',
            'profile',
            'openid',
            'aws.cognito.signin.user.admin',
          ],
          redirectSignIn: ['vocably-pro://auth'],
          redirectSignOut: ['vocably-pro://auth'],
          responseType: 'code',
        },
      },
    },
  },
};
