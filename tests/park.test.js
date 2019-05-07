const { createParkingLot, park } = require('../src/methods')

describe('createParkingLot', () => {
  // create a parking lot with 7 slots
  createParkingLot(7)

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

  it('It should say return a message saying all slots in the lot are occupied', () => {
    park('KA-01-HH-1234', 'White')
    park('KA-01-HH-2345', 'Red')
    park('KA-01-HH-3456', 'White')
    park('KA-01-HH-4567', 'Blue')
    park('KA-01-HH-5678', 'White')
    park('KA-01-HH-6789', 'Black')
    expect(park('KA-05-JK-1921', 'Black')).toBe('All slots in the lot are occupied!')
  })
})
