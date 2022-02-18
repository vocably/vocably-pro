export const environmentLocal = {
  chromeExtensionId: 'mbpgmaflnlocikfiffhkjehhmnapkjgp',
  auth: {
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_e2NoKqwUm',
    userPoolWebClientId: '4p94j2g6678lieetfnso636edd',
    oauth: {
      domain: 'auth.vocably.pro',
      scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: true,
      },
    },
  },
  api: {
    baseUrl: 'https://api.vocably.pro',
  },
};
