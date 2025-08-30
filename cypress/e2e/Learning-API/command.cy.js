//ในกรณีที่ไม่สามารถต่อ cypress ได้ ถ้าไม่มี sucgession ของ cypress ขึ้นมา
/// <reference types="cypress" />

//Loop beforeEach คือก่อนที่จะ run testcase ทุก case จะต้องทำตามคำสั่งนี้ก่อนถึงจะเข้าเคสอื่นๆต่อได้
// ตัวอย่างคือการยิง API Method: GET 
// เก็ยค่าในรูปแบบของตัวแปร getSomeProduct เพื่อเอาไปใช้ต่อ
beforeEach(() => {
    cy.request('https://fakestoreapi.com/products/1').as('getSomeProduct')

})

// TC สำหรับการยิงเช็คค่าของ API
describe('Action Command: Request', () => {
    it('Test Request', () => {
        cy.get('@getSomeProduct') //@getSomeProduct คือตัวแปรที่ถูกเก็บค่าไว้และใช้การเขียนแบบ closures เพื่อเข้าถึงข้อมูลในตัวแปร
        //เช็ค hearder
        .then((result) => {
            expect(result.status).to.eq(200)
        })
        //เช็ค hearder
        .then((result) => {
            expect(result.body).to.not.be.null
            expect(result.body).to.not.be.empty
        })
    })
})

//fixture ดึงข้อมูลจาก test data ที่อยู่ใน fixture ออกมาใช้
describe('Verify Json',() => {
    it('Check data in Json', () => {
        //cy.fixture คือคำสั่งที่ใช้ดึงโหลดไฟล์ข้อมูลออกมาที่อยู่ใน fixture
        cy.fixture("example.json")
        .then((result) => {
            //cy.log(result) จะไม่สามารถดึง log ออกมาตรงๆได้ เราต้องทำการแปลง array ใน json ให้เปน
            // string เพื่อเรียกดูข้อมูลจะต้องใช้คำสั่ง JSON.stringify(ตัวแปร)
            cy.log(JSON.stringify(result))
        })
    })
})

//ลองทำเอง 
// เช็ค header
describe('Verify HTTP header == 200', () => {
    it('Check HTTP Status header 200', () => {
        cy.get('@getSomeProduct')
        .then((resultHeard) => {
            expect(resultHeard.status).to.eq(200) // chech http status = 200 หรือไม่
        })
    })
})

// Loop each
describe('Check response it has xx ro not', () => {
    it('Check Response some field', () => {
        cy.get('@getSomeProduct')
        .then((resultResponse) => {
            expect(resultResponse.body.id).to.eq(1)
            cy.get(resultResponse)
             
            //Function loop .each มันจะทำการวน loop ที่มีค่าอยู่ใน array ทีละตัวจนกว่าจะเจอค่าที่เราต้องการ
            .each((resultResponse), () => {
                 expect(resultResponse.body.description).to.contain('Your perfect pack for everyday')
            })
        })
    })
})


//writeFile ใช้บันทึกข้อความ/JSON ไว้เป็นหลักฐาน หรือเก็บ data ไว้ใช้ต่อในเทสอื่น
describe('Save action log after test into JSON', () => {
  it('Save File after test done', () => {
    cy.fixture('example.json').then((saveFileAfterTest) => {
      // เขียนไฟล์ (เขียน object ลง .txt ก็ได้ Cypress จะ stringify ให้)
      cy.writeFile('abc.txt', saveFileAfterTest)
      // อ่านไฟล์กลับมา — วงเล็บที่ถูกต้องคือ ) แล้วค่อย .then(...)
      cy.readFile('abc.txt').then((content) => {
        cy.log('FileContent: ' + content)   // content เป็นสตริง (เพราะอ่าน .txt)
      })
    })
  })
})