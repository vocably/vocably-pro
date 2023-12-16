export const environmentLocal = {
  chromeExtensionId: 'mbpgmaflnlocikfiffhkjehhmnapkjgp',
  safariExtensionId: 'pro.vocably.Vocably.Extension (UNSIGNED)',
  piwikId: '25473e53-4fde-4fe1-a2ce-273ec6a4d0e3',
  sentryEnvironment: 'dev',
  wwwBaseUrl: 'https://dev.env.vocably.pro',
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
