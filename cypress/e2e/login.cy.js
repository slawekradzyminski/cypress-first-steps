/// <reference types="cypress" />
import loginPage from '../pages/loginPage';

describe('Login Page Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081')
    });

    it('Visits the Login Page and checks for elements', () => {
        cy.get('h2').contains('Login').should('be.visible')
        cy.get('input[name="username"]').should('exist')
        cy.get('input[name="password"]').should('exist')
        cy.get('button').contains('Login').should('be.visible')
        cy.get('a').contains('Register').should('be.visible')
    })

    it('should log in using admin credentials', () => {
        loginPage.attemptLogin('admin', 'admin');

        cy.get('h1').should('contain', 'Hi Slawomir!')
        cy.get('p').contains("You're logged in! Congratulations :)").should('be.visible')
    });

    it('should navigate to the register page when clicking the register button', () => {
        loginPage.clickRegister();
        
        cy.url().should('include', '/register');
        cy.get('h2').contains('Register').should('be.visible');
    });

})