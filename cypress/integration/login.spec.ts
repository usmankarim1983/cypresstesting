import LogInPage from "../support/pageObject/login.page"

describe('cypress with tc', () => {

    before(function(){
        cy.fixture('testdata').then(function(data)
        {
            this.data = data ;
        })
        })

    it ('login', function() {

        cy.visit('/');
       const logInPage = new LogInPage()
            logInPage.clickLoginBtn().click();
            logInPage.inputEmail().type(this.data.email);
            logInPage.inputPassword().type(this.data.password);
            logInPage.clickSignIn();
            logInPage.validateMessage();
    })



})
