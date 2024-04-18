import { registerPage } from "../pages/registerPage";
import { getRandomUser } from "../generators/userGenerator";

describe('Registration Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/register');
    });

    it('successfully registers with valid data', () => {
        // when
        const newUser = getRandomUser();
        registerPage.fillAndSubmitRegistrationForm(newUser);
        // then
        cy.url().should('include', '/login');
        cy.get('.alert-success').should('contain.text', 'Registration successful');
    });
});