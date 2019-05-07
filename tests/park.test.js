const createParkingLot = require('../src/operations/createParkingLot')
const park = require('../src/operations/park')

describe('createParkingLot', () => {
  const lot = {}
  // create a parking lot with 7 slots
  createParkingLot(lot, 7)

  it(`It should park the car in the nearest open slot`, () => {
    expect(park(lot, 'KA-01-HH-1234', 'White')).toMatch(/Allocated slot number/)
  })

  it(`It should throw an error asking for a valid number`, () => {
    expect(park(lot, 'KA-01-HH-1234', 101)).toBe(
      'Invalid input, make sure you enter both the plate, and the color'
    )
  })

  it(`It should throw an error asking for a valid number`, () => {
    expect(park(lot, undefined, 'White')).toBe(
      'Invalid input, make sure you enter both the plate, and the color'
    )
  })

  it(`It should throw an error asking for a valid number`, () => {
    expect(park(lot)).toBe('Invalid input, make sure you enter both the plate, and the color')
  })

  it('It should say return a message saying all slots in the lot are occupied', () => {
    park(lot, 'KA-01-HH-1234', 'White')
    park(lot, 'KA-01-HH-2345', 'Red')
    park(lot, 'KA-01-HH-3456', 'White')
    park(lot, 'KA-01-HH-4567', 'Blue')
    park(lot, 'KA-01-HH-5678', 'White')
    park(lot, 'KA-01-HH-6789', 'Black')
    expect(park(lot, 'KA-05-JK-1921', 'Black')).toBe('All slots in the lot are occupied!')
  })
})
