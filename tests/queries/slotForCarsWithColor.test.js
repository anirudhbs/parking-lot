const createParkingLot = require('../../src/operations/createParkingLot')
const park = require('../../src/operations/park')
const slotForCarsWithColor = require('../../src/queries/slotForCarsWithColor')

describe('createParkingLot', () => {
  let lot = {}
  // create a parking lot with 6 slots
  createParkingLot(lot, 6)

  lot = park(lot, 'KA-01-HH-1234', 'White')[0]
  lot = park(lot, 'KA-02-HH-2345', 'Red')[0]
  lot = park(lot, 'KA-05-HH-3456', 'White')[0]
  lot = park(lot, 'KA-05-HH-4567', 'Blue')[0]
  lot = park(lot, 'KA-03-HH-5678', 'White')[0]
  lot = park(lot, 'KA-12-HH-6789', 'Red')[0]

  it('It should return empty object', () => {
    const expectedOutput = {}
    expect(slotForCarsWithColor(lot, 'Pink')).toMatchObject(expectedOutput)
  })

  it('It should return object with cars of matching color', () => {
    const expectedOutput = {
      2: {
        plate: 'KA-02-HH-2345',
        color: 'Red'
      },
      6: {
        plate: 'KA-12-HH-6789',
        color: 'Red'
      }
    }
    expect(slotForCarsWithColor(lot, 'Red')).toMatchObject(expectedOutput)
  })

  it('It should say that a color has to be passed as a parameter', () => {
    expect(() => {
      slotForCarsWithColor(lot)
    }).toThrow(TypeError)
  })
})
