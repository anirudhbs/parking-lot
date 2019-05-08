const { getMatchingValues } = require('../utils')

function slotForRegistration (lot, plate) {
  if (plate === undefined) {
    return 'Please mention a plate to look for'
  }

  const matchesObject = getMatchingValues(lot, value => value.plate === plate)
  const matchesArray = Object.keys(matchesObject)

  return matchesArray.length > 0 ? matchesArray.join(', ') : 'Not found'
}

module.exports = slotForRegistration
