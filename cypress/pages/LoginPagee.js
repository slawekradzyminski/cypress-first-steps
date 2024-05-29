class LoginPage {
    attemptLogin(username, password) {
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('form').submit();
    }

    checkValidationMessage() {
        cy.get('input[name="username"]').should('have.class', 'is-invalid');
        cy.get('.invalid-feedback').first().should('contain', 'Required field length is 4 or more');
        cy.get('input[name="password"]').should('have.class', 'is-invalid');
        cy.get('.invalid-feedback').last().should('contain', 'Required field length is 4 or more');
    }
}

export default new LoginPage();