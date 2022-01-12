it('Learning assertion', function(){

cy.visit('https://example.cypress.io/')

cy.contains('get').click()
cy.get('#query-btn').should('contain', 'Button')

.should('have.class', 'query-btn')
.should('be.visible')
.should('be.enabled')

cy.get('#query-btn').invoke('attr', 'id')
.should('equal', 'query-btn')

cy.get('#query-btn')
.should('contain', 'Button')
.and ('have.class', 'query-btn')

//Explicit assertions 
//expect
expect(true).to.be.true
let name ='Bolaji'
expect(name).to.be.equal('Bolaji')

//assert
assert.equal(2,2, 'Not equal')
assert.strictEqual(4,4, 'Not Strictly Equal')

})