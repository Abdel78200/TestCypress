
/// <reference types="cypress" />
require("cypress-downloadfile/lib/downloadFileCommand")

Cypress.Commands.add("fillLoginForm", (userCredentials) => {
    const { email, password } = userCredentials

    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').click();
    cy.contains("Login to your account").should("be.visible");

    cy.get("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)").type(email)
    cy.get("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)").type(password)
    cy.get("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button").click()
})
Cypress.Commands.add("fillSignupForm", (userCredentials) => {
    const { name, email } = userCredentials

    cy.get(".signup-form > h2")
        .should("be.visible")
        .and("contain.text", "New User Signup!")

    cy.get("#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)").type(name)
    cy.get("#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)").type(email)
    cy.get("#form > div > div > div:nth-child(3) > div > form > button").click()
})

Cypress.Commands.add("fillAccountInformationForm", (userCredentials) => {
    cy.get("#id_gender1").click()
    cy.get("#password").type(userCredentials.password)

    cy.get("#days").select(userCredentials.days)
    cy.get("#months").select(userCredentials.months)
    cy.get("#years").select(userCredentials.years)

    cy.get("#newsletter").click()
    cy.get("#optin").click()

    cy.get("#first_name").type(userCredentials.firstName)
    cy.get("#last_name").type(userCredentials.lastName)

    cy.get("#company").type(userCredentials.company)
    cy.get("#address1").type(userCredentials.address)

    cy.get("#country").select(userCredentials.country)
    cy.get("#state").type(userCredentials.state)
    cy.get("#city").type(userCredentials.city)
    cy.get("#zipcode").type(userCredentials.zipcode)

    cy.get("#mobile_number").type(userCredentials.mobile)

    cy.get("#form > div > div > div > div > form > button").click()
})
Cypress.Commands.add('remplirFormulaireInscription', (user) => {
    cy.get('#id_gender1').check({ force: true });
    cy.get('#password').type(user.password);
  
    cy.get('#days').select(user.day.toString());
    cy.get('#months').select(user.month);
    cy.get('#years').select(user.year.toString());
    cy.get('#first_name').type(user.firstName);
    cy.get('#last_name').type(user.lastName);
    cy.get('#address1').type(user.address);
    cy.get('#country').select(user.country);
    cy.get("#state").type(user.state)
    cy.get("#city").type(user.city)
    cy.get("#zipcode").type(user.zipcode)
    cy.get("#mobile_number").type(user.mobile)

    cy.get("#form > div > div > div > div > form > button").click();

  });