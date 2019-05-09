const createParkingLot = require('../../src/operations/createParkingLot')
const park = require('../../src/operations/park')

describe('createParkingLot', () => {
  it(`It should park the car in the nearest open slot`, () => {
    let lot = {}
    createParkingLot(lot, 7)

    const expectedObject = {
      1: {
        plate: 'KA-01-HH-1234',
        color: 'White'
      },
      2: null,
      3: null,
      4: null,
      5: null,
      6: null
    }
    expect(park(lot, 'KA-01-HH-1234', 'White')).toMatchObject([expectedObject, 1])
  })

  it(`It should throw an error asking for a valid number`, () => {
    let lot = {}
    createParkingLot(lot, 7)
    expect(() => {
      park(lot, 'KA-01-HH-1234')
    }).toThrow(TypeError)
  })

  it(`It should throw an error asking for a valid number`, () => {
    let lot = {}
    createParkingLot(lot, 7)
    expect(() => {
      park(lot, undefined, 'White')
    }).toThrow(TypeError)
  })

  it(`It should throw an error asking for a valid number`, () => {
    let lot = {}
    createParkingLot(lot, 7)
    expect(() => {
      park(lot)
    }).toThrow(TypeError)
  })

  it('It should say throw an error saying all slots in the lot are occupied', () => {
    let lot = {}
    createParkingLot(lot, 2)

    lot = park(lot, 'KA-01-HH-1234', 'White')[0]
    lot = park(lot, 'KA-01-HH-2345', 'Red')[0]

    expect(() => {
      park(lot, 'KA-05-JK-1921', 'Black')
    }).toThrow(Error)
  })
})
