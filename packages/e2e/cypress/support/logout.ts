import { Auth } from '@aws-amplify/auth';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      logout(): void;
    }
  }
}
Auth.configure({
  region: Cypress.env('AWS_REGION'),
  userPoolId: Cypress.env('USER_POOL_ID'),
  userPoolWebClientId: Cypress.env('USER_POOL_WEB_CLIENT_ID'),
});

Cypress.Commands.add('logout', () => {
  const signOut = Auth.signOut();

  cy.wrap(signOut, { log: false });
});
