import LogInPage from "../support/pageObject/login.page"

describe('cypress with tc', () => {

    before(function(){
        cy.fixture('testdata').then(function(data)
        {
            this.data = data ;
        })
        })

    it ('login', () => {

        cy.visit('/');
       const logInPage = new LogInPage()
            logInPage.clickLoginBtn().click();
            logInPage.inputEmail().type(this.)
            logInPage.inputPassword();
            logInPage.clickSignIn();
            logInPage.validateMessage();
    })



})
