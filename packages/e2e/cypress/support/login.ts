import { Auth } from '@aws-amplify/auth';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      login(username?: string, password?: string): void;
    }
  }
}
Auth.configure({
  region: Cypress.env('AWS_REGION'),
  userPoolId: Cypress.env('USER_POOL_ID'),
  userPoolWebClientId: Cypress.env('USER_POOL_WEB_CLIENT_ID'),
});

Cypress.Commands.add(
  'login',
  (username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) => {
    const log = Cypress.log({
      displayName: 'COGNITO LOGIN',
      message: [`🔐 Authenticating | ${username}`],
      // @ts-ignore
      autoEnd: false,
    });

    log.snapshot('before');

    const signIn = Auth.signIn({ username, password });

    cy.wrap(signIn, { log: false }).then((cognitoResponse: any) => {
      const keyPrefixWithUsername = `${cognitoResponse.keyPrefix}.${cognitoResponse.username}`;

      window.localStorage.setItem(
        `${keyPrefixWithUsername}.idToken`,
        cognitoResponse.signInUserSession.idToken.jwtToken
      );

      window.localStorage.setItem(
        `${keyPrefixWithUsername}.accessToken`,
        cognitoResponse.signInUserSession.accessToken.jwtToken
      );

      window.localStorage.setItem(
        `${keyPrefixWithUsername}.refreshToken`,
        cognitoResponse.signInUserSession.refreshToken.token
      );

      window.localStorage.setItem(
        `${keyPrefixWithUsername}.clockDrift`,
        cognitoResponse.signInUserSession.clockDrift
      );

      window.localStorage.setItem(
        `${cognitoResponse.keyPrefix}.LastAuthUser`,
        cognitoResponse.username
      );

      window.localStorage.setItem(
        'amplify-authenticator-authState',
        'signedIn'
      );
      log.snapshot('after');
      log.end();
    });
  }
);
