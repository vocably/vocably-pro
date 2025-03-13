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
  // aws_project_region: AWS_CONFIG_PROJECT_REGION,
  // aws_cognito_region: AWS_CONFIG_COGNITO_REGION,
  // aws_user_pools_id: AWS_CONFIG_USER_POOLS_ID,
  // aws_user_pools_web_client_id: AWS_CONFIG_USER_POOLS_WEB_CLIENT_ID,
  // aws_cognito_identity_pool_id: AWS_CONFIG_IDENTITY_POOL_ID,
  // oauth: {
  //   domain: AWS_CONFIG_OAUTH_DOMAIN,
  //   scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  //   redirectSignIn: 'vocably-pro://auth',
  //   redirectSignOut: 'vocably-pro://auth',
  //   responseType: 'code',
  // },
  // storage: new AuthStorage(),
  // federationTarget: 'COGNITO_USER_POOLS',
  // aws_cognito_username_attributes: [],
  // aws_cognito_social_providers: ['GOOGLE'],
  // aws_cognito_signup_attributes: ['EMAIL'],
  // aws_cognito_mfa_configuration: 'OFF',
  // aws_cognito_mfa_types: ['SMS'],
  // aws_cognito_password_protection_settings: {
  //   passwordPolicyMinLength: 8,
  //   passwordPolicyCharacters: [],
  // },
  // aws_cognito_verification_mechanisms: ['EMAIL'],
};
