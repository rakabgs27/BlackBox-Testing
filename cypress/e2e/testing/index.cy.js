/// <reference types="cypress" />
describe('User can see Index Page', () => {
    it('Index Page can be Opened!', () => {
      cy.visit("http://127.0.0.1:8000/");
      cy.get(':nth-child(1) > .nav-link').should("have.text", "Home");
      cy.get(':nth-child(2) > .nav-link').should("have.text", "List Produk");
      cy.get(':nth-child(3) > .nav-link').should("have.text", "Login");
      cy.get(':nth-child(4) > .nav-link').should("have.text", "Register");
      cy.get('.row > .d-flex > h1').should("have.text", "ELECTRONIC SHOP SEJAHTERA");
      cy.get('.img-fluid').should("be.visible");
      cy.get('.footer-top').should("be.visible");
      cy.scrollTo(0, 500);
      cy.get('.back-to-top').should("be.visible");
    })
  })