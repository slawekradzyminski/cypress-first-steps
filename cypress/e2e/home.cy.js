/// <reference types="cypress" />

describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.login('admin', 'admin')
    });

    it('should display welcome message', () => {
        cy.get('h1').contains('Hi Slawomir!');
        cy.get('p').contains("You're logged in! Congratulations :)");
    });

    it('should display at least one user', () => {
        cy.get('ul').find('li').should('have.length.at.least', 1);
    });

});