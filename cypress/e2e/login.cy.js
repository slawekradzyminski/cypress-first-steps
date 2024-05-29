/// <reference types="cypress" />

import LoginPage from '../pages/LoginPagee';
import HomePage from '../pages/HomePage';

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081');
    });

    it('successfully logs in with admin credentials', () => {
        LoginPage.fillUsername('admin');
        LoginPage.fillPassword('admin');
        LoginPage.submit();
        HomePage.checkGreetingMessage('Hi Slawomir!');
    });

    it('displays validation errors for too short username and password', () => {
        LoginPage.fillUsername('adm');
        LoginPage.fillPassword('adm');
        LoginPage.submit();
        LoginPage.checkValidationMessage();
    });
});

