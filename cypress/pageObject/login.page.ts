class LogInPage {
    clickLoginBtn(){
        cy.get('.login').click();
        return this;
    }
    inputEmail(){
        cy.get('#email').type("123@gmail.com");
        return this;
    }
    inputPassword(){
        cy.get('#passwd').type('random');
        return this;
    }
    clickSignIn(){
        cy.get('button[name=SubmitLogin]').click();
        return this;
    }
    validateMessage(){
        cy.get('ol > li').should('have.text', 'Authentication failed.');
        return this;
    }


}
export default new LogInPage();