describe('dashboard screen', () => {
  beforeEach(() => {
    cy.task('clearDecks');
  });

  it('displays dashboard', () => {
    cy.login();
  });
});
