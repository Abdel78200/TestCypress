
/// <reference types="cypress" />
describe('Création de compte', () => {
    beforeEach(() => {
      cy.visit('https://automationexercise.com/');

    })  
  
    it("Création d'un compte", () => {
    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').click();
    cy.contains("Login to your account").should("be.visible");
      cy.wait(1000);
      cy.get("#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)").type("Abdel")
      cy.get("#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)").type("elh78200@gmail.com")
      cy.get("#form > div > div > div:nth-child(3) > div > form > button").click()
  
  const genders = ['#id_gender1', '#id_gender2'];
  const randomGender = genders[Math.floor(Math.random() * genders.length)];
      cy.get(randomGender).check().should('be.checked');
      cy.wait(4000);
      cy.get('#password').type('Abdolo78');
  
  const randomDay = Math.floor(Math.random() * 31) + 1;
      cy.get('#days').select(randomDay.toString());
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const randomMonth = months[Math.floor(Math.random() * months.length)];
      cy.get('#months').select(randomMonth);
  
  const randomYear = Math.floor(Math.random() * (2025 - 1900 + 1)) + 1900;
      cy.get('#years').select(randomYear.toString());
  
      cy.get('#first_name').type('Abdel');
      cy.get('#last_name').type('elh');
      cy.get('#address1').type('rue du clos');
  
  const countries = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore'];
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      cy.get('#country').select(randomCountry);
  
      cy.wait(4000);
    })
  });

  