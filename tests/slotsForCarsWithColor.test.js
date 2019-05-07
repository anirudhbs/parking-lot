const createParkingLot = require('../src/operations/createParkingLot')
const park = require('../src/operations/park')
const slotsForCarsWithColor = require('../src/operations/slotsForCarsWithColor')

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

  it('It should say that nothing is found', () => {
    expect(slotsForCarsWithColor(lot, 'Pink')).toBe('Not found')
  })

  it('It should return list of plates of matching color', () => {
    expect(slotsForCarsWithColor(lot, 'Red')).toBe('2, 6')
  })

  it('It should say that a color has to be passed as a parameter', () => {
    expect(slotsForCarsWithColor(lot)).toBe('Please mention a color to look for')
  })
})
