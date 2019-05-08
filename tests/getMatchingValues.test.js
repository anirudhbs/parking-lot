const { getMatchingValues } = require('../src/utils')
const createParkingLot = require('../src/operations/createParkingLot')
const park = require('../src/operations/park')

describe('autoComplete', () => {
  const lot = {}
  const n = 4
  createParkingLot(lot, n)
  park(lot, 'KA-01-HH-3456', 'White')
  park(lot, 'KA-01-HH-4567', 'Blue')
  park(lot, 'KA-01-HH-5678', 'White')

  it('It should return an empty object', () => {
    const expectedObj = {}
    expect(getMatchingValues(lot, value => value.color === 'Pink')).toMatchObject(expectedObj)
  })

  it('It should return object with cars which pass the predicate test', () => {
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
