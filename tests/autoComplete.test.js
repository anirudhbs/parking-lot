const { autoComplete } = require('../src/utils')

describe('autoComplete', () => {
  const commands = [
    'create_parking_lot',
    'park',
    'leave',
    'registration_numbers_for_cars_with_colour',
    'slot_numbers_for_cars_with_colour',
    'slot_number_for_registration_number'
  ]

  it('It should return an array of all the commands along with the input', () => {
    expect(autoComplete('')).toMatchObject([commands, ''])
  })

  it('It should return an array of all the matching commands for the given input', () => {
    expect(autoComplete('cre')).toMatchObject([['create_parking_lot'], 'cre'])
  })

  it('It should return an array of all the matching commands for the given input', () => {
    expect(autoComplete('   cre')).toMatchObject([['create_parking_lot'], 'cre'])
  })

  it('It should return an empty array along with the given input', () => {
    expect(autoComplete('hithere')).toMatchObject([[], 'hithere'])
  })
})
