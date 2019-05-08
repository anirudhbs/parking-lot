const { autoComplete } = require('../src/utils')
const commands = require('../src/COMMANDS')

describe('autoComplete', () => {
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
