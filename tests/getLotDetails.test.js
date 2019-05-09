const { getLotDetails } = require('../src/utils')
const createParkingLot = require('../src/operations/createParkingLot')
const park = require('../src/operations/park')

describe('autoComplete', () => {
  let lot = {}
  const n = 4
  createParkingLot(lot, n)

  it('It should return an empty lot', () => {
    const expectedObj = {}
    expect(getLotDetails(lot)).toMatchObject(expectedObj)
  })

  it('It should return an lot details with only used slots', () => {
    const expectedObj = {
      1: {
        plate: 'KA-01-HH-3456',
        color: 'White'
      },
      2: {
        plate: 'KA-01-HH-4567',
        color: 'Blue'
      },
      3: {
        plate: 'KA-01-HH-5678',
        color: 'White'
      }
    }

    lot = park(lot, 'KA-01-HH-3456', 'White')[0]
    lot = park(lot, 'KA-01-HH-4567', 'Blue')[0]
    lot = park(lot, 'KA-01-HH-5678', 'White')[0]
    expect(getLotDetails(lot)).toMatchObject(expectedObj)
  })
})
