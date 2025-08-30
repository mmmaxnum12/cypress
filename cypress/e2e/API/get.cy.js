describe('Get User by ID', () => {
    it('TC001: Get User By ID', () => {
        cy.fixture("resultResponseGetUser").then((responseGetUserByID) => {
            cy.getUserByID(10).then((resultResponseGetUserByID) => {
                cy.verifyResponse(resultResponseGetUserByID)
            })
        })
    });
})