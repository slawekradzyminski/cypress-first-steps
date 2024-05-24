declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to register a new user.
         * @example cy.register(user)
         */
        register(user: any): Chainable<Response>;

        /**
         * Custom command to log in to the application.
         * @example cy.login('username', 'password')
         */
        login(username: string, password: string): void;
    }
}