/// <reference types="cypress" />

describe('Login Page Test', () => {
    it('Visits the Login Page and checks for elements', () => {
        // Visit the login page
        cy.visit('http://localhost:8081')
        
        // Assert the presence of the Login header
        cy.get('h2').contains('Login').should('be.visible')

        // Assert the presence of the username input
        cy.get('input[name="username"]').should('exist')

        // Assert the presence of the password input
        cy.get('input[name="password"]').should('exist')

        // Assert the presence of the Login button
        cy.get('button').contains('Login').should('be.visible')

        // Assert the presence of the Register link
        cy.get('a').contains('Register').should('be.visible')
    })
})