class RegistrationPage {
  // Visit the registration page
  visit() {
    cy.visit('/customer/account/create');
  }

  // Fill the registration form with valid data
  fillRegistrationForm(userData) {
    cy.get('input[name="firstname"]').type(userData.firstName);
    cy.get('input[name="lastname"]').type(userData.lastName);
    cy.get('input[name="email"]').type(userData.email);
    cy.get('input[name="password"]').type(userData.password);
    cy.get('input[name="password_confirmation"]').type(userData.password);
  }

  // Submit the registration form
  submitRegistration() {
    cy.get('button[type="submit"]').click();
  }

  // Check if the success message appears
  checkSuccessMessage() {
    cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.');
  }
}

export default new RegistrationPage();
