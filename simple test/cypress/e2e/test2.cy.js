describe('cypress test 2', () => {
  it('visits cypress page, type an email address and assert input field content', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    // qurying the email input field
    cy.get('input[type="email"]').as('emailInput')

    // type email address
    const emailAddress = 'rio@gmail.com'
    cy.get('@emailInput').type(emailAddress)

    // assert about the content of the input field
    cy.get('@emailInput').should('have.value',emailAddress)

  })
})