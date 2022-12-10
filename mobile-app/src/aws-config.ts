export const awsConfig = {
  aws_project_region: 'eu-central-1',
  aws_cognito_region: 'eu-central-1',
  aws_user_pools_id: 'eu-central-1_g0OM2BVPL',
  aws_user_pools_web_client_id: '2oar72d3bfrd0did0d9fbaoeli',
  oauth: {
    domain: 'auth.dev.env.vocably.pro',
    scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    redirectSignIn: 'vocably-pro://auth',
    redirectSignOut: 'vocably-pro://auth',
    responseType: 'code',
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
