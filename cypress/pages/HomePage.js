class HomePage {
    checkGreetingMessage(message) {
        cy.get('h1').should('contain', message);
    }
}

export default new HomePage();