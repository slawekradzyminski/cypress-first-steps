/// <reference types="cypress" />

describe('Login Test', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('http://localhost:8081');
  });

  it('successfully logs in with admin credentials', () => {
    // Type in the username and password
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');

    // Click the login button
    cy.get('form').submit();

    // Check if the greeting message is correct, indicating a successful login
    cy.get('h1').should('contain', 'Hi Slawomir!');
  });

  it('displays validation errors for too short username and password', () => {
    // Type in a too short username and password
    cy.get('input[name="username"]').type('adm');
    cy.get('input[name="password"]').type('adm');

    // Click the login button
    cy.get('form').submit();

    // Check for validation messages
    cy.get('input[name="username"]').should('have.class', 'is-invalid');
    cy.get('.invalid-feedback').first().should('contain', 'Required field length is 4 or more');
    cy.get('input[name="password"]').should('have.class', 'is-invalid');
    cy.get('.invalid-feedback').last().should('contain', 'Required field length is 4 or more');
  });
});


