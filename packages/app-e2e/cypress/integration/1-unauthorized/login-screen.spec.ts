describe('login screen', () => {
  it('redirects to login screen', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', '/sign-in');
    cy.matchImageSnapshot('login screen');
  });
});
