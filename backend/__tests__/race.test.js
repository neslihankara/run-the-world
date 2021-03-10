const divide = require('../src/calculator')

describe('calculator function', () => {
  test('it should pass', () => {
    const expectedOutput = 4
    const actualOutput = divide(12, 3)
    expect(actualOutput).toBe(expectedOutput)
  })
})
