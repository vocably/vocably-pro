describe('susbcription flow', () => {
  beforeEach(() => {
    cy.task('resetUserCustomAttributes');
    cy.task('clearDecks');
    cy.login();
  });

  const getIframeDocument = () => {
    return cy
      .get('iframe.paddle-frame')
      .its('0.contentDocument')
      .should('exist');
  };

  const getIframeBody = () => {
    return getIframeDocument().its('body').should('not.be.empty').then(cy.wrap);
  };

  it('subscribes', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', '/deck');
    cy.get('[data-test="no-decks-screen"]').should('be.visible');
    cy.matchImageSnapshot('empty unsubscribed dashboard');

    cy.get('[data-test="todo-subscribe"]').click();
    cy.location('pathname').should('eq', '/subscription');
    cy.matchImageSnapshot('trial subscription initial select plan');

    cy.get('[data-test="subscribe-button"]').click();
    cy.wait(100);
    cy.matchImageSnapshot('select subscription error prompt');

    cy.get('[data-test="subscribe-3"]').click();
    cy.wait(200);
    cy.matchImageSnapshot('trial subscription selected');

    cy.get('[data-test="subscribe-button"]').click();
    cy.wait(5000);
    getIframeBody().find('[data-testid="postcodeInput"]').type('1382TW');
    getIframeBody().find('[data-testid="locationFormSubmitButton"]').click();
    getIframeBody()
      .find('[data-testid="SPREEDLY_CARD_PaymentSelectionButton"]')
      .click();
    getIframeBody()
      .find('[data-testid="cardNumberInput"]')
      .type('4242424242424242');
    getIframeBody()
      .find('[data-testid="cardholderNameInputContainer"]')
      .type('Test User');
    getIframeBody().find('[data-testid="expiryMonthInput"]').type('12');
    getIframeBody().find('[data-testid="expiryYearInput"]').type('2028');
    getIframeBody()
      .find('[data-testid="cardVerificationValueInput"]')
      .type('123');
    getIframeBody().find('[data-testid="cardPaymentFormSubmitButton"]').click();

    cy.wait(10000);
    cy.get('[data-test="post-payment-success"]').should('be.visible');
    cy.matchImageSnapshot('successful trial payment');

    cy.get('[data-test="main-menu"]').click();
    cy.get('[data-test="main-menu-manage-subscription"]').click();
    cy.location('pathname').should('eq', '/subscription/manage');
    cy.matchImageSnapshot('manage subscription');

    cy.get('[data-test="cancel-subscription"]').click();
    cy.wait(5000);
    getIframeBody().find('[data-testid="routeContainer"] button').click();
    cy.get('[data-test="cancellation-success"]').should('be.visible');
    cy.matchImageSnapshot('trial subscription cancel success');

    cy.get('[data-test="return-to-dashboard"]').click();
    cy.location('pathname').should('eq', '/deck');
    cy.get('[data-test="no-decks-screen"]').should('be.visible');
    cy.matchImageSnapshot('empty subscribed dashboard');
  });
});
