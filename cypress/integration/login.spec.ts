describe('cypress with tc', () => {

    it ('testing google', () => {

        cy.visit('/');
        cy.get('[name="q"]')
        .type('automation step by step');
    })



})
