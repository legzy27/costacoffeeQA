describe('Login', function(){
    it('Sign in', function(){
        cy.clearCookies() 
        cy.visit('https://www.costa.co.uk/coffee-club/login/')
        cy.get('[data-cy=cookieconsent__btn--accept]').click()
        const email = Cypress.env('email')
        const password = Cypress.env('password')
         cy.get('#longEmail').type(email)
         cy.wait(500)
        /cy.get('#oldPassword').type(password)
        cy.contains('Submit').should('be.visible').click()
    })
})

