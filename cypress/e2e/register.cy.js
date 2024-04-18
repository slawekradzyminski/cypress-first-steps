import { registerPage } from "../pages/registerPage";

describe('Registration Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/register');
    });

    it('successfully registers with valid data', () => {
        // when
        registerPage.fillAndSubmitRegistrationForm();

        // then
        cy.url().should('include', '/login');
        cy.get('.alert-success').should('contain.text', 'Registration successful');
    });
});