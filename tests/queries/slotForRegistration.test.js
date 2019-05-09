const createParkingLot = require('../../src/operations/createParkingLot')
const park = require('../../src/operations/park')
const slotForRegistration = require('../../src/queries/slotForRegistration')

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
    expect(slotForRegistration(lot, 'KA-05-HH-0000')).toMatchObject(expectedOutput)
  })

  it('It should return object with cars of entered registration number', () => {
    const expectedOutput = {
      4: {
        plate: 'KA-05-HH-4567',
        color: 'Blue'
      }
    }
    expect(slotForRegistration(lot, 'KA-05-HH-4567')).toMatchObject(expectedOutput)
  })

  it('It should say that a registration number has to be passed as a parameter', () => {
    expect(() => {
      slotForRegistration(lot)
    }).toThrow(TypeError)
  })
})
