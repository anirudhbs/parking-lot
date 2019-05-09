const { runCommand } = require('../src/lot')

describe('runCommand', () => {
  it('It should show a message stating Invalid command', () => {
    expect(runCommand(['hello', 'world'])).toBe('Invalid command')
  })

  it('It should return a message saying that a lot has been created', () => {
    expect(runCommand(['create_parking_lot', '6'])).toBe('Created a parking lot with 6 slots')
  })

  it('It should throw an error for wrong params data type', () => {
    expect(() => {
      runCommand(null)
    }).toThrow(TypeError)
  })

  it('It should throw an error for wrong params data type', () => {
    expect(() => {
      runCommand(1234)
    }).toThrow(TypeError)
  })
})
