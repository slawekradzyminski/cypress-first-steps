/// <reference types="cypress" />

import LoginPage from '../pages/LoginPagee';
import HomePage from '../pages/HomePage';

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081');
    });

    it('successfully logs in with admin credentials', () => {
        LoginPage.attemptLogin('admin', 'admin');
        HomePage.checkGreetingMessage('Hi Slawomir!');
    });

    it('displays validation errors for too short username and password', () => {
        LoginPage.attemptLogin('adm', 'adm');
        LoginPage.checkValidationMessage();
    });
});