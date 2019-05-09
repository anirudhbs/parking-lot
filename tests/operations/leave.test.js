const createParkingLot = require('../../src/operations/createParkingLot')
const park = require('../../src/operations/park')
const leave = require('../../src/operations/leave')

describe('Leave operation', () => {
  // create a parking lot with 6 slots

  it('It should remove the car from the allocated slot', () => {
    let lot = createParkingLot({}, 6)[0]

    lot = park(lot, 'KA-01-HH-1234', 'White')[0]
    lot = park(lot, 'KA-01-HH-2345', 'Red')[0]
    lot = park(lot, 'KA-01-HH-3456', 'White')[0]
    lot = park(lot, 'KA-01-HH-4567', 'Blue')[0]
    lot = park(lot, 'KA-01-HH-5678', 'White')[0]
    lot = park(lot, 'KA-01-HH-6789', 'Black')[0]

    const expectedObj = {
      1: { plate: 'KA-01-HH-1234', color: 'White' },
      2: { plate: 'KA-01-HH-2345', color: 'Red' },
      3: { plate: 'KA-01-HH-3456', color: 'White' },
      5: { plate: 'KA-01-HH-5678', color: 'White' },
      6: { plate: 'KA-01-HH-6789', color: 'Black' }
    }

    expect(leave(lot, 4)).toMatchObject([expectedObj, 4])
  })

  it('It should send a message saying the slot is already empty', () => {
    let lot = createParkingLot({}, 6)[0]

    lot = park(lot, 'KA-01-HH-1234', 'White')[0]
    lot = park(lot, 'KA-01-HH-2345', 'Red')[0]

    expect(() => {
      leave(leave(lot, 1)[0], 1)
    }).toThrow(Error)
  })

  it("It should throw an error saying this slot doesn't exist", () => {
    let lot = createParkingLot({}, 6)[0]

    lot = park(lot, 'KA-01-HH-1234', 'White')[0]
    lot = park(lot, 'KA-01-HH-2345', 'Red')[0]

    // for when there are less than mentioned slots in the lot
    expect(() => {
      leave(lot, 12)
    }).toThrow(TypeError)
  })

  it('It should throw an error asking for a valid slot number', () => {
    let lot = createParkingLot({}, 6)[0]

    lot = park(lot, 'KA-01-HH-1234', 'White')[0]
    lot = park(lot, 'KA-01-HH-2345', 'Red')[0]

    expect(() => {
      leave(lot, null)
    }).toThrow(TypeError)
  })
})
