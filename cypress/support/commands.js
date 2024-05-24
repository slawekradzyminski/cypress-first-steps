Cypress.Commands.add('login', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signin',
        body: {
            username: username,
            password: password
        }
    }).then((response) => {
        const token = response.body.token; 
        cy.wrap(token).as('token');
        window.localStorage.setItem('user', JSON.stringify(response.body));
    });

    cy.visit('http://localhost:8081');
});

Cypress.Commands.add('register', (user) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signup',
        body: user,
        failOnStatusCode: false
    });
});
