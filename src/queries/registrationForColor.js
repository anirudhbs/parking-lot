const { getMatchingValues } = require('../utils')

function registrationForColor (lot, color) {
  if (color === undefined) {
    return 'Please mention a color to look for'
  }

  const matchesObject = getMatchingValues(lot, value => value.color === color)
  const matchesArray = Object.values(matchesObject).map(car => car.plate)

  return matchesArray.length > 0 ? matchesArray.join(', ') : 'Not found'
}

module.exports = registrationForColor
