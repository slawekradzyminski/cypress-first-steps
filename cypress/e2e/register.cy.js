/// <reference types="cypress" />

import RegisterPage from '../pages/RegisterPagee';
import getRandomUser from '../generators/userGenerator';
import LoginPage from '../pages/LoginPagee';

describe('Registration Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/register');
    });

    it('successfully registers a new user', () => {
        const user = getRandomUser();
        RegisterPage.fillRegistrationForm(user);
        RegisterPage.submitRegistration();
        LoginPage.checkRegistrationSuccess();
    });
});