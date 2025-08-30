//before run ก่อนหลังจบ TC
beforeEach(() => {
    cy.request({
        method: 'post',
        url: 'https://fakestoreapi.com/carts',
        body: {
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
    }).then((resultCreateUser) => {
        expect(resultCreateUser.status).to.eq(201)
    })
})


describe('Hook Before', () =>{
    it('To verify Hook: before, It will starting before test ', () => {
        cy.request('https://fakestoreapi.com/carts')
    });

})



// ถ้าจะลบทีหลัง ค่อยใช้ after 1
afterEach(() => {
  const id = Cypress.env('createdCartId');
  if (id) {
    cy.request({
      method: 'DELETE',
      url: `https://fakestoreapi.com/carts/11`,
    });
  }
});


