

describe('buttons', () => {
  
  //open url before each test
  beforeEach(()=>{
    cy.visit('http://127.0.0.1:5500/app/')
  })
  it('click on Rock button', () => {
    

    // query button with id "#rock"
    cy.get('#rock').should('exist').should('have.text','Rock').click()

    cy.get('#user-option').should('exist').should('have.text','Rock')
    cy.get('#computer-option').should('exist').then(option=>{
      if(option.text() === "Rock"){
        cy.get('#result').should('exist').should('have.text','You\'re Tied!')

      }else if(option.text()=== 'Paper'){
        cy.get('#result').should('exist').should('have.text','You Lost!')

      }else{
        cy.get('#result').should('exist').should('have.text','You Won!')
      }
    })
  })

  it('click on Paper button', () => {
    

    // query button with id "#rock"
    cy.get('#paper').should('exist').should('have.text','Paper').click()

    cy.get('#user-option').should('exist').should('have.text','Paper')
    cy.get('#computer-option').should('exist').then(option=>{
      if(option.text() === "Paper"){
        cy.get('#result').should('exist').should('have.text','You\'re Tied!')

      }else if(option.text()=== 'Scissors'){
        cy.get('#result').should('exist').should('have.text','You Lost!')

      }else{
        cy.get('#result').should('exist').should('have.text','You Won!')
      }
    })
  })


  it('click on Scissors button', () => {
    

    // query button with id "#rock"
    cy.get('#scissors').should('exist').should('have.text','Scissors').click()

    cy.get('#user-option').should('exist').should('have.text','Scissors')
    cy.get('#computer-option').should('exist').then(option=>{
      if(option.text() === "Scissors"){
        cy.get('#result').should('exist').should('have.text','You\'re Tied!')

      }else if(option.text()=== 'Rock'){
        cy.get('#result').should('exist').should('have.text','You Lost!')

      }else{
        cy.get('#result').should('exist').should('have.text','You Won!')
      }
    })
  })


})