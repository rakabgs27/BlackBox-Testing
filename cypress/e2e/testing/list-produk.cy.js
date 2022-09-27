/// <reference types="cypress" />
describe('User can see List Produk Page', () => {
    it('List Produk Page can be Opened!', () => {
      cy.visit("http://127.0.0.1:8000/guest/listproduk");
      cy.get(':nth-child(1) > .nav-link').should("have.text", "Home");
      cy.get(':nth-child(2) > .nav-link').should("have.text", "List Produk");
      cy.get(':nth-child(3) > .nav-link').should("have.text", "Login");
      cy.get(':nth-child(4) > .nav-link').should("have.text", "Register");
      cy.get('h2').should("have.text", "List Produk");
      cy.get('.section-title > p').should("have.text", "MACAM LIST PRODUK ELEKTRONIK");
      cy.get('.footer-top').should("be.visible");
      cy.get('.section-title').should("be.visible");
    })
  })