declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to log in to the application.
         * @example cy.login('username', 'password')
         */
        login(username: string, password: string): Chainable<Element>
    }
}