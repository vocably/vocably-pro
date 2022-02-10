import { nl } from '../../fixtures/nl';
import { fr } from '../../fixtures/fr';

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

  it('displays multiple decks', () => {
    cy.task('saveDeck', nl);
    cy.task('saveDeck', fr);
    cy.visit('/');
    cy.location('pathname').should('eq', '/deck/fr');
    cy.get('[data-test="dashboard-cards"]').should('be.visible');
    cy.matchImageSnapshot('multiple decks screen - french');
    cy.get('[data-test="deck-selector"]').click();
    cy.get('ion-select-popover').should('be.visible');
    cy.matchImageSnapshot('deck selector clicked');
    cy.get('ion-select-popover ion-item:nth-child(2)').click();
    cy.location('pathname').should('eq', '/deck/nl');
    cy.matchImageSnapshot('multiple decks screen - dutch');

    // Delete Dutch
    cy.get('[data-test="edit-button"]').click();
    cy.location('pathname').should('eq', '/deck/nl/edit');
    cy.matchImageSnapshot('edit dutch');
    cy.get('[data-test="delete-button"]').click();
    cy.get('#yes-please').click();

    cy.location('pathname').should('eq', '/deck/fr');

    // Delete French
    cy.get('[data-test="edit-button"]').click();
    cy.location('pathname').should('eq', '/deck/fr/edit');
    cy.get('[data-test="delete-button"]').click();
    cy.get('#yes-please').click();

    cy.location('pathname').should('eq', '/deck');
  });
});
