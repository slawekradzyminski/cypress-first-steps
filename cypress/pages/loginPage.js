class LoginPage {

    attemptLogin(username, password) {
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('button').contains('Login').click();
    }
    
}

export default new LoginPage();