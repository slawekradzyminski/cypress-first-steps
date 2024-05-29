Cypress.Commands.add('login', (username, password) => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:4001/users/signin',
      failOnStatusCode: false,
      body: {
        username: username,
        password: password
      }
    });
  });