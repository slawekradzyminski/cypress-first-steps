/// <reference types="cypress" />

import HomePage from '../pages/HomePage';

describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.login('admin', 'admin').then((response) => {
            expect(response.status).to.eq(200);
            localStorage.setItem('user', JSON.stringify(response.body));
        });
        HomePage.visitHomePage();
    });

    it('should display at least one user on the home page', () => {
        HomePage.getUserListLength().should('be.gte', 1);
    });

    it('should navigate to login page on logout', () => {
        HomePage.clickLogout();
        cy.url().should('include', '/login');
    });

    it('should navigate to add user page when clicking add more users', () => {
        HomePage.clickAddMoreUsers();
        cy.url().should('include', '/add-user');
    });
});