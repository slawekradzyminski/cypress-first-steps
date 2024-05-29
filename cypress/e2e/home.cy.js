/// <reference types="cypress" />

describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.login('admin', 'admin').then((response) => {
            expect(response.status).to.eq(200);
            localStorage.setItem('user', JSON.stringify(response.body));
        });
        cy.visit('http://localhost:8081');
    });

    it('should display at least one user on the home page', () => {
        cy.get('ul').find('li').its('length').should('be.gte', 1);
    });
});