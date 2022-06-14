class LogInPage {
    clickLoginBtn(){
        return cy.get('.login');
    }
    inputEmail(){
        return cy.get('#email');
         
    }
    inputPassword(){
        return cy.get('#passwd');
    }
    clickSignIn(){
       return cy.get('#SubmitLogin]');
    }
    validateMessage(){
       return cy.get('ol > li');
    }


}
export default LogInPage