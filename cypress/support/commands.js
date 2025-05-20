Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Enila',
    lastName: 'Egrog',
    email: 'enila@test.com',
    phone: '1234567890',
    text: 'Texto Padrão',

}) => {
  cy.get('#firstName').type(data.firstName);
  cy.get('#lastName').type(data.lastName);
  cy.get('#email').type(data.email);
  cy.get('#phone').type(data.phone);
  cy.get('#open-text-area').type(data.text);
  cy.get('.button').click();
});