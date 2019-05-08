const { getMatchingValues } = require('../utils')

function registrationForColor (lot, color) {
  if (color === undefined) {
    throw new TypeError('Please mention a color to look for')
  }

  const matchesObject = getMatchingValues(lot, value => value.color === color)
  return matchesObject
}

module.exports = registrationForColor
