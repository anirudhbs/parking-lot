const { getOutputString } = require('../src/lot')

describe('getOutputString', () => {
  it('It should throw an error', () => {
    const mockInput = 'hello world'
    expect(() => {
      getOutputString(mockInput)
    }).toThrow(TypeError)
  })

  it('It should return Not found', () => {
    const mockInput = []
    expect(getOutputString(mockInput)).toBe('Not found')
  })

  it('It should return slot numbers in a comma separated string', () => {
    const mockInput = ['1', '2', '3']
    expect(getOutputString(mockInput)).toBe('1, 2, 3')
  })

  it('It should return registration numbers in a comma separated string', () => {
    const mockInput = ['KA-05-JK-1921', ' KA-05-JK-1922', ' KA-05-JK-1923']
    expect(getOutputString(mockInput)).toBe('KA-05-JK-1921,  KA-05-JK-1922,  KA-05-JK-1923')
  })
})
