/// <reference types="cypress" />
describe('Création de compte', () => {
    beforeEach(() => {
      cy.visit('https://automationexercise.com/');

    })  
  
    it("Création d'un compte", () => {
        const email = `user_${Date.now()}@mail.com`;

        const user = {
          firstName: 'Abdel',
          lastName: 'Elh',
          password: 'Abdolo78',
          day: Math.floor(Math.random() * 28) + 1,
          month: 'March',
          year: 1995,
          address: 'Rue du clos',
          country: 'Canada',
          email: email,
          state: 'France',
          city: 'Mantes',
          zipcode: '34590',
          mobile:'0678349050',
        };
    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').click();
    cy.contains("Login to your account").should("be.visible");
    cy.get('input[data-qa="signup-name"]').type(user.firstName);
    cy.get('input[data-qa="signup-email"]').type(user.email);
    cy.get('button[data-qa="signup-button"]').click();
    
   cy.remplirFormulaireInscription (user);
   
})
});