describe('Update User', () => {
    it('TC001: Update data of user and verify response', () => {
        cy.fixture("updateUser").then((requestUpdateUser) => {
            cy.fixture("responseUpdateUser").then((expectedResponse) => {
                cy.updateUser(1, requestUpdateUser).then((resultAfterUpdate) => {
                    cy.verifyResponseUpdateData(resultAfterUpdate, expectedResponse)
                })
            })
        })
    });
})