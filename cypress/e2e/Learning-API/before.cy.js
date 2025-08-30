//before 
// เรียกแค่ครั้งเดียว ถ้ามี describe มากกว่า 1 จะไม่ถูกใช้งานในครั้งถัดไป
before(() => {
    cy.request('https://fakestoreapi.com/carts').as('allProducts') //เก็บข้อมูลให้อยู่ในตัวแปร alias @getAllProducts
})

describe('To verfify get all product', () => {
    it('API will return all data and 200 OK', () => {
        cy.get('@allProducts').then((result) => {
            expect(result.body).to.exist
        })
        
    })
})

//ไม่ถูกเรียกใช้งาน
describe('To verfify get all product', () => {
    it.skip('API will return all data and 200 OK', () => {
        cy.get('@allProducts').then((result) => {
            expect(result.body).to.exist
        })
        
    })
})
