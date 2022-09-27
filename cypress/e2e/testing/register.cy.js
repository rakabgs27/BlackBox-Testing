/// <reference types="cypress" />
describe('User can see Register Page', () => {
    it('Register can be Opened!', () => {
      cy.visit("http://127.0.0.1:8000/register");
      cy.get(':nth-child(1) > .nav-link').should("have.text", "Home");
      cy.get(':nth-child(2) > .nav-link').should("have.text", "List Produk");
      cy.get(':nth-child(3) > .nav-link').should("have.text", "Login");
      cy.get(':nth-child(4) > .nav-link').should("have.text", "Register");
      cy.get('.col-md-8').should("be.visible");
      cy.get('.card-header').should("have.text", "Register");
      cy.get(':nth-child(2) > .col-md-4').should("have.text", "Username");
      cy.get(':nth-child(3) > .col-md-4').should("have.text", "Name");
      cy.get(':nth-child(4) > .col-md-4').should("have.text", "Email Address");
      cy.get(':nth-child(5) > .col-md-4').should("have.text", "Password");
      cy.get(':nth-child(6) > .col-md-4').should("have.text", "Confirm Password");
      cy.get('.btn').contains("Register").and("be.visible");    
    
    })

    it('User can be Register!', () => {
      cy.visit("http://127.0.0.1:8000/register");
      cy.get(':nth-child(1) > .nav-link').should("have.text", "Home");
      cy.get(':nth-child(2) > .nav-link').should("have.text", "List Produk");
      cy.get(':nth-child(3) > .nav-link').should("have.text", "Login");
      cy.get(':nth-child(4) > .nav-link').should("have.text", "Register");
      cy.get('.col-md-8').should("be.visible");
      cy.get('.card-header').should("have.text", "Register");
      cy.get(':nth-child(2) > .col-md-4').should("have.text", "Username");
      cy.get(':nth-child(3) > .col-md-4').should("have.text", "Name");
      cy.get(':nth-child(4) > .col-md-4').should("have.text", "Email Address");
      cy.get(':nth-child(5) > .col-md-4').should("have.text", "Password");
      cy.get(':nth-child(6) > .col-md-4').should("have.text", "Confirm Password");
    
      cy.get('#username').type("UserTest");
      cy.get('#name').type("UserTest123");
      cy.get('#email').type("usertest@mail.com");
      cy.get('#password').type("password");
      cy.get('#password-confirm').type("password");
      cy.get('.btn').contains("Register").click();
      cy.get('#navbarDropdown').click();
      cy.get('[href="/dashboard"]').click();
      cy.get('.navbar-nav > .nav-item > .nav-link').click();
    })


  })