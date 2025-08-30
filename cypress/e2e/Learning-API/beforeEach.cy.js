//beforeEach
// มันคือการเตรียมข้อมูลก่อนที่จะเทสเคสนี้ในทุกๆครั้งจะต้องมา run คำสั่งใน beforeEach ก่อนเสมอ
//Ex API Get All Products
beforeEach(() => {
    cy.request('https://fakestoreapi.com/carts').as('getAllProducts') //เก็บข้อมูลให้อยู่ในตัวแปร alias @getAllProducts
})

describe('To verfi get data of the API: Get All Products', () => {
    it('TC01 Get app product and then API will return 200 ok', () => {
        //call getAllProducts ในรูปแบบ alias cy.get('@getAllProducts)
        cy.get('@getAllProducts').then((result) => {
            expect(result.status).to.eq(200)
            expect(result.body).not.be.empty
        })
        
    });
})

