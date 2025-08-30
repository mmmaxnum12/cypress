// chai condition OK
describe('API: GET User', () => {
    describe('Get Some User acct', () => {
        it('Get data some user', () => {
            cy.request('https://fakestoreapi.com/users/2')
            .then((result) => {
                //chech stausText ว่าเป็น OK มั้ย
                expect(result.status).ok
                //เช็คว่ามีค่าอยู่มั้ย ซึ่งมันจะต้องไม่ null
                expect(result.body).exist
                expect(result.body).and.to.not.empty
            })
        });
    })
})


// chai condition Cosmetic
describe('API: GET User', () => {
    describe('Get Some User acct', () => {
        it('Get data some user', () => {
            cy.request('https://fakestoreapi.com/users/2')
            .then((result) => {
                //chech stausText ว่าเป็น OK มั้ย
                expect(result.status).ok
                //เช็คว่ามีค่าอยู่มั้ย ซึ่งมันจะต้องไม่ null
                expect(result.body).and.to.not.empty
            })
        });
    })
})


