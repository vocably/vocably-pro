import { nl } from '../../fixtures/nl';

describe('dashboard screen', () => {
  beforeEach(() => {
    cy.task('clearDecks');
    cy.login();
  });

  it('displays dashboard', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', '/deck');
    cy.get('[data-test="no-decks-screen"]').should('be.visible');
    cy.matchImageSnapshot('no decks screen');
  });

  it('displays single deck', () => {
    cy.task('saveDeck', nl);
    cy.visit('/');
    cy.location('pathname').should('eq', '/deck/nl');
    cy.get('[data-test="dashboard-cards"]').should('be.visible');
    cy.matchImageSnapshot('single deck screen');
  });
});
