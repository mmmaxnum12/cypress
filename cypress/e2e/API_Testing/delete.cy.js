//API Delete

describe('Test Delete user API: Method Delete', () => {
    it('Delete user api 200 OK', ()=> {
        cy.request({
            method: 'delete',
            //delete by ID
            url: 'https://fakestoreapi.com/carts/11',
        }).then((resultDelete) => {
            expect(resultDelete.status).to.eq(200)
        })
    })
})