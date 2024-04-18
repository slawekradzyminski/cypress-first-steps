export const loginPage = {

    attemptLogin: (username, password) => {
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        loginPage.clickLogin();
    },

    clickLogin: () => {
        cy.get('form[name="form"]').submit();
    },

    clickRegister: () => {
        cy.get('a.btn.btn-link').click();
    }

}