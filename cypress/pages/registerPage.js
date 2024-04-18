import { faker } from '@faker-js/faker';

export const registerPage = {
    fillAndSubmitRegistrationForm: () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const username = faker.internet.userName();
        const password = faker.internet.password();
        const email = faker.internet.email();

        cy.get('input[name="firstName"]').type(firstName);
        cy.get('input[name="lastName"]').type(lastName);
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('input[name="email"]').type(email);

        cy.get('form[name="form"]').submit();
    }
}