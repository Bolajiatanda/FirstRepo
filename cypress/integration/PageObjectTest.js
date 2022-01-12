/// <reference types= "Cypress" />

import LoginPage from './PageObjects/LoginPage'


describe('Test Suite', function(){

    it ('Valid Login Test', function() {
//Create variable of LoginPage. Through that variable i can call differnt methods
cy.visit('http://app.jyre.io/')

const lp=new LoginPage()

lp.fillEmail().type('bolaji.atanda@characterscope.com')
lp.fillPassword().type('Characterscope28')
lp.submit().click()

cy.title ().should('be.equal', 'My Journey') 


    })
    


})