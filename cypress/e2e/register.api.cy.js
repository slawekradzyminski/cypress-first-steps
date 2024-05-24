/// <reference types="cypress" />
import generateUser from '../generators/userGenerator';

describe('Signup API Tests', () => {
    it('should sign up a new user successfully', () => {
        const user = generateUser();

        cy.register(user).then(response => {
            expect(response.status).to.eq(201);
        });
    });

    it('should return HTTP 400 error for username shorter than 4 characters', () => {
        const user = generateUser();
        user.username = "abc";

        cy.register(user).then(response => {
            expect(response.status).to.eq(400);
            expect(response.body).to.deep.equal({
                username: "Minimum username length: 4 characters"
            });
        });
    });
});