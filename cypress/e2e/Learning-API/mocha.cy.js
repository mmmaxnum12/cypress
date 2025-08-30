//TC Name
describe('User', () => {
    //TC Description
    describe('Get User', () => {
        //Test Step1
        it('It shoulf return 200OK with user collection', () => {
            cy.request('https://fakestoreapi.com/users')
            //expected1
            .then((result) => {
                expect(result.status).to.eq(200)
                expect(result.statusText).to.eq('OK')  
                expect(result.body).to.be.an('array').and.to.not.be.empty
            })
        })//Test Step2
        it('Gey User by ID', () => {
            cy.request('https://fakestoreapi.com/users/1')
            //expected2
            .then((resultUserByID) => {
                expect(resultUserByID.body).to.be.an('object').and.to.not.be.empty
            })
        })
    })
})


describe('Get User bu ID', () => {
    it('API will return data is conrrecty', () => {
        cy.request('https://fakestoreapi.com/users/1')
        .then((resultUserByID) => {
            expect(resultUserByID.body).to.be.an('object').and.to.not.be.empty
        })
    })
})