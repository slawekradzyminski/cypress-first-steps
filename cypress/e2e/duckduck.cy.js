/// <reference types="cypress" />

describe('Duck duck go tests', () => {

    beforeEach(() => {
      cy.visit('https://duckduckgo.com')
    })
  
    it('Should find cantest.it page', () => {
        cy.get('#search_form_input_homepage').type('cantest.it')
        cy.get('#search_button_homepage').click()
        cy.get("[data-testid='result-extras-url-link']").should('contain', 'https://www.cantest.it')
    })
  
  })
  