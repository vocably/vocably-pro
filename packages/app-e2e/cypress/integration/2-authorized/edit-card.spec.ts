import { nl } from '../../fixtures/nl';

describe('edit card', () => {
  beforeEach(() => {
    cy.task('clearDecks');
    cy.login();
  });

  it('edit and delete card', () => {
    cy.task('saveDeck', nl);
    cy.visit('/deck/nl/edit');
    cy.get('[data-test="delete-button"]').should('be.visible');

    const getCard = () => {
      const cardId = '-tcNT';
      return cy.get(`[data-test-card-id="${cardId}"]`);
    };

    const getCardItem = () => {
      return getCard().find('[data-test="card-item"]');
    };

    getCard().should('be.visible');
    getCard().find('[data-test="card-action-delete"]').click();
    let restore = getCard().find('[data-test="card-action-restore"]');
    restore.should('be.visible');
    cy.matchImageSnapshot('delete card - restore button');
    getCard().find('[data-test="card-action-restore"]').click();
    getCard().find('[data-test="card-action-edit"]').click();
    const getForm = () => {
      return getCard().find('[data-test="card-form"]');
    };
    getForm().should('be.visible');
    getCardItem().should('not.be.visible');
    cy.matchImageSnapshot('edit card - form');
    getForm().find('[name="source"]').clear().type('new value');
    cy.matchImageSnapshot('edit card - type new value');
    getForm().find('[data-test="cancel"]').click();
    getForm().should('not.be.visible');
    getCardItem().should('be.visible');
    cy.matchImageSnapshot('edit card - cancelled item');
    getCard().find('[data-test="card-action-edit"]').click();
    getForm().find('[name="source"]').clear().type('gevolg');
    getForm().find('[name="partOfSpeech"]').clear().type('noun');
    getForm().find('[name="translation"]').clear().type('consequence');
    getForm().find('[name="definition"]').clear()
      .type(`* iets dat door en na iets anders gebeurt
* groep mensen die bij een belangrijk persoon hoort`);
    getForm().find('[data-test="submit"]').click();
    getCardItem().should('be.visible');
    getForm().should('not.be.visible');
    cy.matchImageSnapshot('updated card item');

    cy.visit('/deck/nl/edit');
    getCard().should('be.visible');
    cy.matchImageSnapshot('updated card item');
    getCard().find('[data-test="card-action-delete"]').click();

    cy.visit('/deck/nl/edit');
    cy.get('[data-test="delete-button"]').should('be.visible');
    cy.matchImageSnapshot('permanently deleted card item');
  });
});
