/// <reference types="cypress" />
import generateUser from '../generators/userGenerator';
import registerPage from '../pages/registerPage';

describe('Register Page Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/register');
    });

    it('should register a new user successfully', () => {
        const user = generateUser();

        registerPage.fillRegistrationForm(user);
        registerPage.submitRegistration();

        cy.get('.alert.alert-success').should('contain', 'Registration successful');
    });
});