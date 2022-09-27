/// <reference types="cypress" />
describe('Admin can see Tambah Barang Page', () => {
    it('Admin can show Barang!', () => {
       //Step and Check Login Page
       cy.visit("http://127.0.0.1:8000/login");
       cy.get(':nth-child(1) > .nav-link').should("have.text", "Home");
       cy.get(':nth-child(2) > .nav-link').should("have.text", "List Produk");
       cy.get(':nth-child(3) > .nav-link').should("have.text", "Login");
       cy.get(':nth-child(4) > .nav-link').should("have.text", "Register");
       cy.get('.justify-content-center > :nth-child(1)').should("be.visible");
       cy.get('.card-header').should("have.text", "Login");
       cy.get(':nth-child(2) > .col-md-4').should("have.text", "Username");
       cy.get(':nth-child(3) > .col-md-4').should("have.text", "Password");
       
       //Typing Username and Password
       cy.get('#username').type("Admin123");
       cy.get('#password').type("admin1234");
       cy.get('.btn-primary').click();
       cy.get('h2').should("have.text", "Selamat Datang , Admin123");

       //Click Tambah Produk in Side Bar
       cy.get(':nth-child(2) > .nav-link').click();

       //Content in Tambah Produk Page
       cy.get('h2').should("have.text", "Barang");
       cy.get('.float-right > .btn').contains("Input Barang").and("be.visible");
       cy.get('tbody > :nth-child(1) > :nth-child(1)').should("have.text", "Nama Barang");
       cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", "Nama Kategori");
       cy.get('tbody > :nth-child(1) > :nth-child(3)').should("have.text", "Harga");
       cy.get('tbody > :nth-child(1) > :nth-child(4)').should("have.text", "Stok");
       cy.get('tbody > :nth-child(1) > :nth-child(5)').should("have.text", "Deskripsi");
       cy.get('tbody > :nth-child(1) > :nth-child(6)').should("have.text", "Foto");
       cy.get('[width="300px"]').should("have.text", "Action");
       cy.get(':nth-child(2) > :nth-child(7) > form > .btn-info').contains("Show").and("be.visible");
       cy.get(':nth-child(2) > :nth-child(7) > form > .btn-primary').contains("Edit").and("be.visible");
       cy.get(':nth-child(2) > :nth-child(7) > form > .btn-danger').contains("Delete").and("be.visible");

       //Show Barang
       cy.get(':nth-child(2) > :nth-child(7) > form > .btn-info').contains("Show").click();
       cy.get('.card-header').contains("Detail Barang").and("be.visible");
       cy.get('.btn').click();
        
    })
  })