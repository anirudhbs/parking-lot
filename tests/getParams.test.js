const { getParams } = require('../src/utils')

describe('autoComplete', () => {
  it('It should return an array with 1 empty string', () => {
    expect(getParams('')).toMatchObject([''])
  })

  it('It should return an array with 1 empty string', () => {
    expect(getParams('   ')).toMatchObject([''])
  })

  it('It should return an array of params from the input command', () => {
    expect(getParams('status')).toMatchObject(['status'])
  })

  it('It should return an array of params from the input command', () => {
    expect(getParams('create_parking_lot 10')).toMatchObject(['create_parking_lot', '10'])
  })

  it('It should return an array of params from the input command', () => {
    expect(getParams('  park KA-05-JK-1921  Black  ')).toMatchObject([
      'park',
      'KA-05-JK-1921',
      'Black'
    ])
  })
})
