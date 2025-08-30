//TC: 001
describe('Cart API - Create', () => {
  it('TC001: Response ต้องตรงกับ body ที่ส่ง', () => {
    cy.fixture('createCarts').then((createCarts) => {
      cy.createCart(createCarts).then((responseCreateCarts) => {
        cy.assertCartMatch(responseCreateCarts, createCarts)   // ✅ เรียก keyword ตรวจ response
      })
    })
  })
})


//TC: 002 Verify Response after create user success
describe('Create API - User', () => {
  it('TC002: Verify Response ของ API ต้องตรงกับ Test Data', () => {
    //เปิดไฟล์ fixtire และหลังจากนั้นเก็บ data จาก json ไว้ในตัวแปร requestDataUser
    cy.fixture("createUser").then((requestDataUser) => {
      //เรียกใช้ custom command ที่เราสร้างไว้สำหรับ api create user คือ createUser
      //หลังจากที่เรียก custom command แล้วให้ส่งตัวแปร requestDataUser ที่เป็น data จาก json เข้าไปใน api
      //หลังจากนั้นให้เก็บเป็นตัวแปรที่ชื่อ responseCreateUser ไว้
      cy.createUser(requestDataUser).then((responseCreateUser) => {
        //เรียกใช้ command ที่เราเขียนไว้คือการเปรียบเทียบค่าของ result และ response ว่าตรงกันหรือไม่
        cy.compareResultAndResponse(responseCreateUser, requestDataUser)
      })
    })
  })
})