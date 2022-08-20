import LogInPage from "../support/pageObject/login.page"

describe('cypress with tc', () => {
    before(function(){
    //     cy.fixture('testdata').then(function(data)
    //     {
    //         this.data = data ;
    //     })
        cy.visit('/');
       });

       it('testing FileUpload', function(){
        LogInPage.clickSkipSignInBtn();


    })



})
