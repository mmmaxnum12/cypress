describe('Verify Create User', () => {
    it('To verify when create the user', () => {
        cy.fixture("createUser").then((dataCreateUser) => {
            cy.createUser(dataCreateUser).then((resultCreateUser) => {
                cy.verifyResponseCreateUser(resultCreateUser, dataCreateUser)
            })
        })
    });
})