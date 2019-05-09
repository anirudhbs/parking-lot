const createParkingLot = require('../../src/operations/createParkingLot')

describe('createParkingLot', () => {
  const n = 6

  it(`It should create a parking lot with ${n} slots`, () => {
    const expectedObj = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null
    }
    expect(createParkingLot({}, n)).toMatchObject([expectedObj, n])
  })

  it('It should throw an error saying that a lot has already been created', () => {
    const lot = createParkingLot({}, n)[0]
    expect(() => {
      createParkingLot(lot, n)
    }).toThrow(Error)
  })

  it(`It should throw an error asking for a valid number`, () => {
    expect(() => {
      createParkingLot({}, null)
    }).toThrow(TypeError)
  })
})
