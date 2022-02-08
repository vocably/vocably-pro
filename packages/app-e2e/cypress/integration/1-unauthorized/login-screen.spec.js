describe('example to-do app', () => {
  it('redirects to login screen', () => {
    cy.visit('http://localhost:8030');
    cy.location('pathname').should('eq', '/login');
  });
});
