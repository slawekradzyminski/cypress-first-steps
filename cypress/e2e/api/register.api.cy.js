/// <reference types="cypress" />

import getRandomUser from '../../generators/userGenerator';

describe('User Registration API Test', () => {
    it('successfully registers a user and returns a 201 status with a valid JWT token', () => {
        const user = getRandomUser();
        cy.request({
            method: 'POST',
            url: 'http://localhost:4001/users/signup',
            body: user
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('token').to.match(/^eyJ/); // Checks if token starts with 'eyJ' which is typical for JWTs
        });
    });

    it('returns a 400 status when required fields are missing', () => {
        const user = { username: '', email: '', password: '', roles: [] }; // Intentionally missing required fields and empty roles
        cy.request({
            method: 'POST',
            url: 'http://localhost:4001/users/signup',
            body: user,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('email', 'must not be empty');
            expect(response.body).to.have.property('password', 'Minimum password length: 4 characters');
            expect(response.body).to.have.property('roles', 'Please pick at least one role');
            expect(response.body).to.have.property('username', 'Minimum username length: 4 characters');
        });
    });
});