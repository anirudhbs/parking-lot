const { getValuesFromObject } = require('../src/lot')

describe('getValuesFromObject', () => {
  it('It should return an array of registration numbers', () => {
    const inputObj = {
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
    expect(getValuesFromObject(inputObj, 'plate')).toMatchObject([
      'KA-01-HH-3456',
      'KA-01-HH-4567',
      'KA-01-HH-5678'
    ])
  })

  it('It should return empty array', () => {
    const inputObj = {}
    expect(getValuesFromObject(inputObj, 'plate')).toMatchObject([])
  })

  it('It should return array of slot numbers', () => {
    const inputObj = {
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
    expect(getValuesFromObject(inputObj, 'slot')).toMatchObject(['1', '2', '3'])
  })
})
