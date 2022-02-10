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
});
