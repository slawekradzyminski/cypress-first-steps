/// <reference types="cypress" />

describe('Cypress workshop test suite', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('my first Cypress test', () => {
    cy.get('.todo-list li').should('have.length', 2)
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

})
