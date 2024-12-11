Feature: User Registration on Magento website

  Scenario: User successfully registers a new account
    Given I am on the registration page
    When I fill in the registration form with valid data
    And I submit the registration form
    Then I should see a success message
