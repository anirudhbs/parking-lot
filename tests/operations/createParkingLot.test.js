const createParkingLot = require('../../src/operations/createParkingLot')

describe('createParkingLot', () => {
  const n = 6
  it(`It should create a parking lot with ${n} slots`, () => {
    expect(createParkingLot({}, n)).toBe(`Created a parking lot with ${n} slots`)
  })

  it('It should send a message saying that a lot has already been created', () => {
    const lot = {}
    createParkingLot(lot, n)
    expect(createParkingLot(lot, n)).toBe('A lot was already created, cannot create another one')
  })

  it(`It should send a message asking for a valid number`, () => {
    expect(createParkingLot({}, null)).toBe('enter a valid number')
  })
})
