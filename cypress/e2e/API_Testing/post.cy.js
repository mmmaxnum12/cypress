//Method POST

describe('Post Request', () => {
    it('TC1 ลองทำ POST', () => {
        cy.request({
            method: 'POST',
            url: 'https://fakestoreapi.com/carts',
            body:{
                "id": 0,
                "userId": 0,
                "products": [
                    {
                        "id": "0",
                        "title": "Test Create",
                        "price": 100,
                        "description": "Test Create Product",
                        "category": "Car",
                        "image": "http://example.com"
                    }
                ]
            }
        }).then((result) => {
            expect(result.status).to.eq(201)
            expect(result.body).and.not.empty
            expect(result.body.products[0].title).to.eq("Test Create")
        })
    });
})