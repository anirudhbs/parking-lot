const { getMatchingValues } = require('../src/utils')
const createParkingLot = require('../src/operations/createParkingLot')
const park = require('../src/operations/park')

describe('Get cars with matching value', () => {
  const n = 4

  it('It should return an empty object', () => {
    let lot = createParkingLot({}, n)[0]

    lot = park(lot, 'KA-01-HH-3456', 'White')[0]
    lot = park(lot, 'KA-01-HH-4567', 'Blue')[0]

    const expectedObj = {}
    expect(getMatchingValues(lot, value => value.color === 'Pink')).toMatchObject(expectedObj)
  })

  it('It should return object with cars which pass the predicate', () => {
    let lot = createParkingLot({}, n)[0]

    lot = park(lot, 'KA-01-HH-3456', 'White')[0]
    lot = park(lot, 'KA-01-HH-4567', 'Blue')[0]
    lot = park(lot, 'KA-01-HH-5678', 'White')[0]

    const expectedObj = {
      1: {
        plate: 'KA-01-HH-3456',
        color: 'White'
      },
      3: {
        plate: 'KA-01-HH-5678',
        color: 'White'
      }
    }
    expect(getMatchingValues(lot, value => value.color === 'White')).toMatchObject(expectedObj)
  })
})
