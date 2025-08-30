// ยิง API POST ด้วย body ที่เตรียมไว้
// เช็คค่า response ที่ยิงไป ว่าตรงกับ body ที่เราเตรียมไว้มั้ย
// กรณีมี 2 TC แยกเช็คกันคนละเคส
describe('To verify when create carts the system will return API 201 and successful', () => {
    it('TC001: Verify response is not be empty and status is 201', () => {
        cy.fixture("createCarts")
        .then((testDataCreate) => {
            cy.request({
                method: 'POST',url: 'https://fakestoreapi.com/carts',body: testDataCreate
            })
            .then((responseTestDataCarts) => {
                expect(responseTestDataCarts.status).to.eq(201)
                expect(responseTestDataCarts).to.not.be.empty
            })
        })
    });
    it('TC002: To Verify response after create the carts is matching test data', () => {
        cy.fixture("responseCreateCarts").then((expectedResponse) => {
            cy.request({
                method: 'POST',url: 'https://fakestoreapi.com/carts',body: expectedResponse  
            })
            .then((resultResponseCreate) => {
                expect(resultResponseCreate.body).to.deep.eq(expectedResponse)
            })
        })
    });
    
})


//กรณีมี 1 TC แล้วต้องการตรวจ response ว่าตรงกับที่เราเขียนไปมั้ย
describe('To verify when create carts the system will return API 201 and successful', () => {
    it('TC001: To Verify response after create the carts is matching test data', () => {
        //เปิดไฟล์ที่เก็บ body และเก็บค่าไว้ในตัวแปร dataCarts
        cy.fixture("createCarts").then((dataCarts) => {
            //เปิดไฟล์ที่เก็บ response และเก็บค่าไว้ในตัวแปร expectedResponse
            cy.fixture("responseCreateCarts").then((expectedResponse) => {
                //ทำการยิง request POST ด้วย body ที่เตรียมไว้
                cy.request({method: 'POST', url: 'https://fakestoreapi.com/carts', body:dataCarts})
                // เก็บ response ไว้ในตัวแปรเพื่อเอาไปเช็คเทียบค่า
                .then((resultAfterCreateCarts) => {
                    expect(resultAfterCreateCarts.status).to.eq(201),
                    expect(resultAfterCreateCarts.statusText).to.eq('Created'),
                    //เปรียบเทียบค่าว่ามันเท่ากันมั้ยของตัว body + response ที่ได้
                    expect(resultAfterCreateCarts.body).to.deep.eq(expectedResponse)
                })
            })
        })
        
    });
})