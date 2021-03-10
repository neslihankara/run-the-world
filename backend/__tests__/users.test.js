const { ExpectationFailed } = require('http-errors')
const request = require('supertest')
const app = require('../src/app')

jest.setTimeout(30000)

describe('Users endpoints', () => {
  it('post req to create a user', async () => {
    const userToCreate = {
      name: 'aslı',
      age: 23,
      gender: 'f',
    }

    const createdUser = (await request(app).post('/users').send(userToCreate)).body
    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
    expect(createdUser.gender).toBe(userToCreate.gender)
  })
})
