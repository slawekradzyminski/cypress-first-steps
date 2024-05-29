class RegisterPage {
    fillRegistrationForm(user) {
        cy.get('input[name="firstName"]').type(user.firstName);
        cy.get('input[name="lastName"]').type(user.lastName);
        cy.get('input[name="username"]').type(user.username);
        cy.get('input[name="password"]').type(user.password);
        cy.get('input[name="email"]').type(user.email);
    }

    submitRegistration() {
        cy.get('form').submit();
    }

    checkRegistrationSuccess() {
        cy.get('.alert-success').should('contain', 'Registration successful');
    }
}

export default new RegisterPage();