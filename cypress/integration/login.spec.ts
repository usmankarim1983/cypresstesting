import LogInPage from "../pageObject/login.page"

describe('cypress with tc', () => {

    it ('login', () => {

        cy.visit('/');
        LogInPage
            .clickLoginBtn()
            .inputEmail()
            .inputPassword()
            .clickSignIn()
            .validateMessage();
    })



})
