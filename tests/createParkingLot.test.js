const createParkingLot = require('../src/operations/createParkingLot')

describe('createParkingLot', () => {
  const n = 6
  it(`It should create a parking lot with ${n} slots`, () => {
    expect(createParkingLot({}, n)).toBe(`Created a parking lot with ${n} slots`)
  })

  it(`It should throw an error asking for a valid number`, () => {
    expect(createParkingLot({}, null)).toBe('enter a valid number')
  })
})
