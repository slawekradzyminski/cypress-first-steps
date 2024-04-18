
describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.login('admin', 'admin')
        cy.visit('http://localhost:8081');
    });

    it('displays the correct welcome message for an admin user', () => {
        cy.get('h1').should('contain.text', 'Hi Slawomir');
    });

});