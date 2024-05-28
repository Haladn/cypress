describe('testing RCP', () => {
  it('visit the app, query elements and assure their content', () => {
    cy.visit('http://127.0.0.1:5500/app/')

    // query main container.
    cy.get('.container').should('exist')

    // query cahild container with class ".row".
    cy.get('.row').should('exist')

    // query child container with class ".col".
    cy.get('.col').should('exist')

    // query "p" tag inside the child class
    cy.get('.col').find('p').should('exist')
    cy.get('.col').find('p').should('have.class','h4 mb-3')

    // query child container with class ".options"
    cy.get('.row').find('div .options').should('exist')
    
    // query buttons inside dive with ".options" class
    cy.get('.options').find('button').should('have.length',3)

    // querying each button
    cy.get('#rock').should('contain','Rock')
    cy.get('#paper').should('contain','Paper')
    cy.get('#scissors').should('contain','Scissors')

    //query the remaining child tag of the container with class ".col"
    cy.get('.col').find('h6').should('have.length',2)
    cy.get('.col').find('h5').should('exist')

    cy.get('h6').contains('Your Option').find('span').should('exist')
    cy.get('h6').contains('Computer Option').find('span').should('exist')
    cy.get('h5').should('contain','Result').find('span').should('exist')



  })
})