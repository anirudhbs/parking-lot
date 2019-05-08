const createParkingLot = require('../../src/operations/createParkingLot')
const park = require('../../src/operations/park')
const leave = require('../../src/operations/leave')

describe('createParkingLot', () => {
  const lot = {}
  // create a parking lot with 7 slots
  createParkingLot(lot, 6)

  park(lot, 'KA-01-HH-1234', 'White')
  park(lot, 'KA-01-HH-2345', 'Red')
  park(lot, 'KA-01-HH-3456', 'White')
  park(lot, 'KA-01-HH-4567', 'Blue')
  park(lot, 'KA-01-HH-5678', 'White')
  park(lot, 'KA-01-HH-6789', 'Black')

  it('It should remove the car from the allocated slot', () => {
    expect(leave(lot, 4)).toBe('Slot number 4 is free')
  })

  it('It should send a message saying the slot is already empty', () => {
    leave(lot, 1)
    expect(leave(lot, 1)).toBe('The slot is already empty')
  })

  it("It should throw an error saying this slot doesn't exist", () => {
    // for when there are less than mentioned slots in the lot
    expect(() => {
      leave(lot, 12)
    }).toThrow(TypeError)
  })

  it('It should throw an error asking for a valid slot number', () => {
    expect(() => {
      leave(lot, null)
    }).toThrow(TypeError)
  })
})
