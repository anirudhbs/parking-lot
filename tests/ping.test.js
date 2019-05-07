const { ping } = require('../src/methods')

describe('ping', () => {
  it('It should return pong', () => {
    expect(ping()).toBe('pong')
  })
})
