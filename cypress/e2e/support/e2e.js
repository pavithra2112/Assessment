// cypress/support/e2e.js
import './commands'; // If you have custom commands, otherwise you can skip this line

// This is an example of extending Cypress commands.
Cypress.Commands.add('visitHomepage', () => {
  cy.visit('https://magento.softwaretestingboard.com/');
});

// You can also add global hooks like beforeEach or afterEach if needed:
beforeEach(() => {
  cy.log('Test is starting...');
});
