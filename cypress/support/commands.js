Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://localhost:8081/login');
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(`${password}{enter}`);
});