import {
  AWS_CONFIG_COGNITO_REGION,
  AWS_CONFIG_OAUTH_DOMAIN,
  AWS_CONFIG_PROJECT_REGION,
  AWS_CONFIG_USER_POOLS_ID,
  AWS_CONFIG_USER_POOLS_WEB_CLIENT_ID,
} from '@env';
import { AuthStorage } from './auth/AuthStorage';
import { urlOpener } from './urlOpener';

export const awsConfig = {
  aws_project_region: AWS_CONFIG_PROJECT_REGION,
  aws_cognito_region: AWS_CONFIG_COGNITO_REGION,
  aws_user_pools_id: AWS_CONFIG_USER_POOLS_ID,
  aws_user_pools_web_client_id: AWS_CONFIG_USER_POOLS_WEB_CLIENT_ID,
  oauth: {
    domain: AWS_CONFIG_OAUTH_DOMAIN,
    scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    redirectSignIn: 'vocably-pro://auth',
    redirectSignOut: 'vocably-pro://auth',
    responseType: 'code',
    urlOpener,
    storage: new AuthStorage(),
  },
  federationTarget: 'COGNITO_USER_POOLS',
  aws_cognito_username_attributes: [],
  aws_cognito_social_providers: ['GOOGLE'],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: ['SMS'],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ['EMAIL'],
};
