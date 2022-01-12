/// <reference types="Cypress" />

class LoginPage
{

// Created 3 action methods 
// This is the page object class. it contain action matters  and include page elements 
fillEmail(value)
{
   let field=cy.get('#Email')
   field.clear()
   field.type(value)
   return this 
}

fillPassword(value)
{
   let field=cy.get('#Password')
   field.clear()
   field.type(value)
   return this 
}

submit()
{
   let button =cy.get('.btn')
   button.click()

}

}

export default LoginPage
