describe('login screen', () => {
  it('redirects to login screen', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', '/login');
    cy.matchImageSnapshot('login screen');
  });
});
