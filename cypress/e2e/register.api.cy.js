/// <reference types="cypress" />
import generateUser from '../generators/userGenerator';

describe('Signup API Tests', () => {
    it('should sign up a new user successfully', () => {
        const user = generateUser();

        cy.request({
            method: 'POST',
            url: 'http://localhost:4001/users/signup',
            body: user
        }).then(response => {
            expect(response.status).to.eq(201);
        });
    });
});