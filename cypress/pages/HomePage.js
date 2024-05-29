class HomePage {
    visitHomePage() {
        cy.visit('http://localhost:8081');
    }

    clickLogout() {
        cy.get('#logout').click();
    }

    clickAddMoreUsers() {
        cy.get('#addmore').click();
    }

    getUserListLength() {
        return cy.get('ul').find('li').its('length');
    }

    checkGreetingMessage(message) {
        cy.get('h1').should('contain', message);
    }
}

export default new HomePage();