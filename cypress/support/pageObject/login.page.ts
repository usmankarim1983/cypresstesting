class LogInPage {
    
    clickSkipSignInBtn(){
        return cy.get('#btn2').should('be.visible').click();
    }
    inputEmail(){
        return cy.get('#email');
         
    }
    inputPassword(){
        return cy.get('#passwd');
    }
    clickSignIn(){
       return cy.get('#SubmitLogin]').attachFile("sample.pdf");
    }
    validateMessage(){
       return cy.get('ol > li');
    }


}
export default new LogInPage