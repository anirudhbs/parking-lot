const { getMatchingValues } = require('../utils')

function slotForCarsWithColor (lot, color) {
  if (color === undefined) {
    return 'Please mention a color to look for'
  }

  const matchesObject = getMatchingValues(lot, value => value.color === color)
  const matchesArray = Object.keys(matchesObject)

  return matchesArray.length > 0 ? matchesArray.join(', ') : 'Not found'
}

module.exports = slotForCarsWithColor
