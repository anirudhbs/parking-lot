const { park } = require('../src/methods')

describe('createParkingLot', () => {
  it(`It should park the car in the nearest open slot`, () => {
    expect(park('KA-01-HH-1234', 'White')).toMatch(/Allocated slot number/)
  })

  it(`It should throw an error asking for a valid number`, () => {
    expect(park('KA-01-HH-1234', 101)).toBe(false)
  })

  it(`It should throw an error asking for a valid number`, () => {
    expect(park(undefined, 'White')).toBe(false)
  })

  it(`It should throw an error asking for a valid number`, () => {
    expect(park()).toBe(false)
  })
})
