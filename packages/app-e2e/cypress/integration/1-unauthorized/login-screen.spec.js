describe('example to-do app', () => {
  it('redirects to login screen', () => {
    cy.visit(Cypress.env('BASE_URL'));
    cy.location('pathname').should('eq', '/login');
  });
});
