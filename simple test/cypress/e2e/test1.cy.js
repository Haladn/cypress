describe('Cypress test 1', () => {
  it('visits the cypress page, queries an element, interacts with it and assert about the content', () => {

    // visiting a specific url
    cy.visit('https://example.cypress.io')

    // query for an element
    cy.get(".home-list").contains('Querying')

    //interact with the element
    cy.get('.home-list').contains('Querying').click()

    // assert about the content on the page
    cy.url().should('include','/commands/querying')
    cy.get('h1').should('contain','Querying')




  })
})