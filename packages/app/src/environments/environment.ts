// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_e2NoKqwUm',
    userPoolWebClientId: 'ghmfj9p2kv8de9v2755pmo82r',
    oauth: {
      domain: 'auth.vocably.pro',
      scope: ['email', 'profile', 'openid'],
      redirectSignIn: 'http://localhost:8030',
      redirectSignOut: 'http://localhost:8030',
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: true,
      },
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
