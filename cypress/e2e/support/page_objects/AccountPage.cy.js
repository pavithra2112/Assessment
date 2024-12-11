class AccountPage {
  // Visit the account page
  visit() {
    cy.visit('/customer/account');
  }

  // Check if the account page is loaded properly
  checkAccountPage() {
    cy.url().should('include', '/customer/account');
    cy.get('.hello').should('be.visible');
  }
}

export default new AccountPage();