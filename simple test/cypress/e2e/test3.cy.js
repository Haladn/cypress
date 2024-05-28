describe('cypress test 3', () => {
  it('visit cypress page, querying some action buttons and click on them', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    //query for action button with class ".action-btn" and click on it.
    cy.get('.action-btn').click()

    //query for action button with id "#action-canvas" and click on it.
    cy.get('#action-canvas').click()

    //query for action button with id "#action-canvas" and click on "topLeft".
    cy.get('#action-canvas').click('topLeft')

    //query for action button with id "#action-canvas" and click on "bottomRight".
    cy.get('#action-canvas').click('bottomRight')
  })
})