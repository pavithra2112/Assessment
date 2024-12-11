import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegistrationPage from '../support/page_objects/RegistrationPage.cy.js';
import AccountPage from '../support/page_objects/AccountPage.cy.js';

Given('I am on the registration page', () => {
  RegistrationPage.visit();
});

When('I fill in the registration form with valid data', () => {
  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: 'Password123'
  };
  RegistrationPage.fillRegistrationForm(userData);
});

When('I submit the registration form', () => {
  RegistrationPage.submitRegistration();
});

Then('I should see a success message', () => {
  RegistrationPage.checkSuccessMessage();
});
