import { loginPage } from "../pages/loginPage";

describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/login');
    });

    it('successfully logs in with valid credentials', () => {
        // when
        loginPage.attemptLogin('admin', 'admin')

        // then
        cy.get('h1').should('contain.text', 'Slawomir')
    });

    it('fails to log in with invalid credentials', () => {
        // when
        loginPage.attemptLogin('wrong', 'wrong')

        // then
        cy.get('.alert-danger').should('have.text', 'Invalid username/password supplied')
    });

    it('validates frontend input requirements before submitting', () => {
        // when
        loginPage.clickLogin()
    
        // then
        cy.get('input[name="username"]').then(($input) => {
            expect($input).to.have.class('is-invalid');
            cy.get($input).siblings('.invalid-feedback').should('have.text', 'Required field length is 4 or more');
        });
    
        cy.get('input[name="password"]').then(($input) => {
            expect($input).to.have.class('is-invalid');
            cy.get($input).siblings('.invalid-feedback').should('have.text', 'Required field length is 4 or more');
        });
    });

    it('navigates to the register page successfully', () => {
        // when
        loginPage.clickRegister();

        // then
        cy.url().should('include', '/register');
        cy.get('h2').should('contain.text', 'Register');
    });

});
