export const environmentLocal = {
  chromeExtensionId: 'mbpgmaflnlocikfiffhkjehhmnapkjgp',
  piwikId: '25473e53-4fde-4fe1-a2ce-273ec6a4d0e3',
  sentryEnvironment: 'dev',
  paddle: {
    sandbox: true,
    vendorId: 5064,
    subscriptionProducts: [
      { currency: 'EUR', duration: 1, id: 26950, price: 9.95, trial: 7 },
      { currency: 'EUR', duration: 3, id: 27076, price: 19.95, trial: 7 },
      { currency: 'EUR', duration: 12, id: 26952, price: 59.4, trial: 7 },
      { currency: 'EUR', duration: 1, id: 26951, price: 9.95, trial: 0 },
      { currency: 'EUR', duration: 3, id: 27077, price: 19.95, trial: 0 },
      { currency: 'EUR', duration: 12, id: 26953, price: 59.4, trial: 0 },
    ],
  },
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
