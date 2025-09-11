describe("Text area", () => {

  it('Shoud type text on text area', () => {

    cy.visit('http://localhost:4200')

    cy.get('#animTransitionTextArea')
      .should('be.visible')
      .and('be.enabled')
      .type('teste')

  })
})
