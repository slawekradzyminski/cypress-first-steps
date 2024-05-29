/// <reference types="cypress" />

describe('User Login API Test', () => {
  it('successfully logs in and returns a 200 status with a valid JWT token', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:4001/users/signin',
      body: {
        username: 'admin',
        password: 'admin'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('username', 'admin');
      expect(response.body).to.have.property('roles').to.deep.equal(['ROLE_ADMIN', 'ROLE_CLIENT']);
      expect(response.body).to.have.property('firstName', 'Slawomir');
      expect(response.body).to.have.property('lastName', 'Radzyminski');
      expect(response.body).to.have.property('token').to.match(/^eyJ/); // Checks if token starts with 'eyJ' which is typical for JWTs
      expect(response.body).to.have.property('email', 'admin@email.com');
    });
  });

  it('returns a 422 status when incorrect credentials are provided', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:4001/users/signin',
      failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
      body: {
        username: 'wrongUser',
        password: 'wrongPass'
      }
    }).then((response) => {
      expect(response.status).to.eq(422);
      expect(response.body).to.have.property('timestamp');
      expect(response.body).to.have.property('status', 422);
      expect(response.body).to.have.property('error', 'Unprocessable Entity');
      expect(response.body).to.have.property('message', 'Invalid username/password supplied');
      expect(response.body).to.have.property('path', '/users/signin');
    });
  });

  it('returns a 400 status when username and password are too short', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:4001/users/signin',
      failOnStatusCode: false,
      body: {
        username: 'usr',
        password: 'pwd'
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('username', 'Minimum username length: 4 characters');
      expect(response.body).to.have.property('password', 'Minimum password length: 4 characters');
    });
  });

  it('returns a 400 status when username or password is empty', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:4001/users/signin',
      failOnStatusCode: false,
      body: {
        username: '',
        password: ''
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('username', 'Minimum username length: 4 characters');
      expect(response.body).to.have.property('password', 'Minimum password length: 4 characters');
    });
  });
});
