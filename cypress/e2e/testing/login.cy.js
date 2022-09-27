/// <reference types="cypress" />
describe('User and Admin can see Login Page', () => {
    it('Login Page can be Opened!', () => {
      cy.visit("http://127.0.0.1:8000/login");
      cy.get(':nth-child(1) > .nav-link').should("have.text", "Home");
      cy.get(':nth-child(2) > .nav-link').should("have.text", "List Produk");
      cy.get(':nth-child(3) > .nav-link').should("have.text", "Login");
      cy.get(':nth-child(4) > .nav-link').should("have.text", "Register");
      cy.get('.justify-content-center > :nth-child(1)').should("be.visible");
      cy.get('.card-header').should("have.text", "Login");
      cy.get(':nth-child(2) > .col-md-4').should("have.text", "Username");
      cy.get(':nth-child(3) > .col-md-4').should("have.text", "Password");
      cy.get('.form-check').should("be.visible");
      cy.get('#remember').should("be.visible").check();
      cy.get('#remember').should("be.visible").uncheck();
      cy.get('.btn-primary').should("be.visible");
      cy.get('.btn-link').should("be.visible");
    })

    it('User can Login!', () => {
      cy.visit("http://127.0.0.1:8000/login");
      cy.get(':nth-child(1) > .nav-link').should("have.text", "Home");
      cy.get(':nth-child(2) > .nav-link').should("have.text", "List Produk");
      cy.get(':nth-child(3) > .nav-link').should("have.text", "Login");
      cy.get(':nth-child(4) > .nav-link').should("have.text", "Register");
      cy.get('.justify-content-center > :nth-child(1)').should("be.visible");
      cy.get('.card-header').should("have.text", "Login");
      cy.get(':nth-child(2) > .col-md-4').should("have.text", "Username");
      cy.get(':nth-child(3) > .col-md-4').should("have.text", "Password");

      cy.get('#username').type("User123");
      cy.get('#password').type("user1234");
      cy.get('.btn-primary').contains("Login").click();
      cy.get('h2').should("have.text", "Selamat Datang , User123");
      cy.get(':nth-child(2) > .nav-link').contains("List Produk");
      cy.get('.navbar-nav > .nav-item > .nav-link').click();
    })

    it('Admin can Login!', () => {
      cy.visit("http://127.0.0.1:8000/login");
      cy.get(':nth-child(1) > .nav-link').should("have.text", "Home");
      cy.get(':nth-child(2) > .nav-link').should("have.text", "List Produk");
      cy.get(':nth-child(3) > .nav-link').should("have.text", "Login");
      cy.get(':nth-child(4) > .nav-link').should("have.text", "Register");
      cy.get('.justify-content-center > :nth-child(1)').should("be.visible");
      cy.get('.card-header').should("have.text", "Login");
      cy.get(':nth-child(2) > .col-md-4').should("have.text", "Username");
      cy.get(':nth-child(3) > .col-md-4').should("have.text", "Password");

      cy.get('#username').type("Admin123");
      cy.get('#password').type("admin1234");
      cy.get('.btn-primary').click();
      cy.get('h2').should("have.text", "Selamat Datang , Admin123");
      cy.get('.navbar-nav > .nav-item > .nav-link').click();
      
    })
  })