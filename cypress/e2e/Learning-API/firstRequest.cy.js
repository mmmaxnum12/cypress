// ก่อนเริ่มในแต่ละ TC ให้เรากำหนดค่าก่อนคือ before แต่มันจะ run แค่ 1 ครั้ง
//beforeeach คือจะ run ทุกๆครั้งก่อนเข้าเคสที่เราจะเทส
beforeEach(() => {
    cy.request('https://fakestoreapi.com/products').as('getAllPrducts') //เตรียมค่าเสร็จแล้วในตัวแปรที่ชื่อ getAllPrducts
})

describe('Firsr Request', () => {
    it('It should request to target website', () => {
        cy.get('@getAllPrducts')
        .then((result) => {
            //Expected
            expect(result.status).to.equal(200)
            //คำสั่งที่เอาไว้ดู log
            // cy.log(JSON.stringify(result.body)) 
            // สร้างตัวแปรที่เก็บค่าของ data ที่เรามีเพื่อเอาไปเช็คเป็น expected ว่ามันตรงกันหรือไม่
            const expectedProduct = {
                id: 20,
                title: "DANVOUY Womens T Shirt Casual Cotton Short",
            }
            //.to.deep.include คือการเปรียบเทียบแค่บาง field
            expect(result.body[19]).to.deep.include(expectedProduct)
        })
    })
})

