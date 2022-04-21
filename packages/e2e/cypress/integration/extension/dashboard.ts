describe('dashboard screen', () => {
  beforeEach(() => {
    cy.task('resetUserCustomAttributes');
    cy.task('clearDecks');
    cy.login();
  });

  it('shows dashboard screen', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', '/deck');
  });
});
