//Handle error case API

describe('Test Error Handle Case', ()=>{
    it('ทดสอบ API ด้วยเคส Bad request', () => {
        cy.request({
            method: 'get',
            //ต้องส่ง param ที่ผิดไปถึงจะได้ error ออกมา
            url: 'https://fakestoreapi.com/max',
            //ใช้คำสั่งนี้เพื่อให้ cypress มันรู้ว่าเรากำลังเทสเคส failed
            failOnStatusCode: false
        }).then((resultErrorCase) => {
            expect(resultErrorCase.status).to.eq(404)
            
        })
    });
})