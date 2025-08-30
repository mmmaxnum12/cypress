//before 
before(() => {
    cy.log('At Before')
})

//beforeEach
beforeEach(() => {
    cy.log('At brfore each')
})

//after
after(() => {
    cy.log('At after')
})


//aferEach
afterEach(() => {
    cy.log('At afterEach')
})



describe('Hook Before', () =>{
    it('To verify Hook: before, It will starting before test ', () => {
        cy.request('https://fakestoreapi.com/carts')
    });

})