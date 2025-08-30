//Method: PUT or Update data
describe('Update data user API: PUT', () => {
    it('Update data user', () => {
        cy.request({
            method: 'PUT',
            url: 'https://fakestoreapi.com/carts/11',
            body: {
                "id": 11,
                "userID": 11,
                products: [
                    {
                        "id": "12",
                        "title": "Test Update",
                        "price": 1500,
                        "description": "Test Update data",
                        "category": "Maxnum",
                        "image": "http://example.com"
                    }
                ]
            } 
        }).then((resultUpdate) => {
            expect(resultUpdate.status).to.eq(200)
            expect(resultUpdate.body).to.not.be.empty
            expect(resultUpdate.body.products[0].description).to.eq("Test Update data")
        })
    });
})