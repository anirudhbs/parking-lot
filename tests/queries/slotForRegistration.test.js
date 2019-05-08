const createParkingLot = require('../../src/operations/createParkingLot')
const park = require('../../src/operations/park')
const slotForRegistration = require('../../src/queries/slotForRegistration')

describe('createParkingLot', () => {
  const lot = {}
  // create a parking lot with 6 slots
  createParkingLot(lot, 6)

  park(lot, 'KA-01-HH-1234', 'White')
  park(lot, 'KA-02-HH-2345', 'Red')
  park(lot, 'KA-05-HH-3456', 'White')
  park(lot, 'KA-05-HH-4567', 'Blue')
  park(lot, 'KA-03-HH-5678', 'White')
  park(lot, 'KA-12-HH-6789', 'Red')

  it('It should return emprty object', () => {
    const expectedOutput = {}
    expect(slotForRegistration(lot, 'KA-05-HH-0000')).toMatchObject(expectedOutput)
  })

  it('It should return cars with entered registration number', () => {
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
