// cypress/support/commands.js

// keyword: สร้าง cart
Cypress.Commands.add('createCart', (cartDataTest) => {
  return cy.request('POST', 'https://fakestoreapi.com/carts', cartDataTest)
})

// keyword: ตรวจว่า response ตรงกับ data ที่ส่งไป
Cypress.Commands.add('assertCartMatch', (resultResponseCreateCarts, testData) => {
  expect(resultResponseCreateCarts.status).to.eq(201)                 // ต้องได้ 201
  expect(resultResponseCreateCarts.body).to.have.property('userId')       // ต้องมี id
  expect(resultResponseCreateCarts.body.userId).to.eq(testData.userId) // userId ตรงกัน
  expect(resultResponseCreateCarts.body.products).to.deep.eq(testData.products) // products ตรงกัน
})

// keyword: ตรวจสอบว่า response ขา get products ตรงกับ body ที่ทำการส่งเข้าไป
Cypress.Commands.add('compareResultAndResponse', (resultResponseCreateUser, testData) => {
  expect(resultResponseCreateUser.status).to.eq(201)
  expect(resultResponseCreateUser.body.products).to.deep.eq(testData.products)
})


// keyword: สร้าง createUser
Cypress.Commands.add('createUser', (dataCreateUser) => {
  return cy.request('POST', 'https://fakestoreapi.com/users', dataCreateUser)
})

// keyword: ตรวจสอบว่า response ขา create user
Cypress.Commands.add('verifyResponseCreateUser', (resultResponseCreateUser, expectedBody) => {
  expect(resultResponseCreateUser.status).to.eq(201)
  // expect(resultResponseCreateUser.body).to.deep.eq(expectedBody)
  // กรณีที่ API return ออกมาแค่ค่าเดียวต้องใช้คำสั่งproperty('id').that.is.a('ค่าที่ออกมาเช่น number หรือ string etc.. ')
  expect(resultResponseCreateUser.body).to.have.property('id').that.is.a('number')
})


// keyword: get user by ID
Cypress.Commands.add('getUserByID', (id) => {
  return cy.request('GET', `https://fakestoreapi.com/users/${id}`)
})

// keyword: check ค่า get user by ID
Cypress.Commands.add('verifyResponse', (resultResponseGetUserByID) => {
  expect(resultResponseGetUserByID.status).to.eq(200)
  expect(resultResponseGetUserByID.body).to.not.be.empty
})



// kwyword: Update User by ID
Cypress.Commands.add('updateUser', (id, requestData) => {
  return cy.request('PUT', `https://fakestoreapi.com/users/${id}`, requestData)
})

//keyword: Verify response data when updated
Cypress.Commands.add('verifyResponseUpdateData', (resultResponseUpdateUser, body) => {
  expect(resultResponseUpdateUser.status).to.eq(200)
  expect(resultResponseUpdateUser.body).to.include(body) 
  expect(resultResponseUpdateUser.body).to.deep.eq(body)
})