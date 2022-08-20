

describe('fileUpload', () => {

    it('testing FileUpload', function(){
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("[name='file']").attachFile('sample.pdf');
        cy.get('#file-submit').click();
        cy.pause();


    })
   
})
