const { getMatchingValues } = require('../utils')

function slotForRegistration (lot, plate) {
  if (plate === undefined) {
    throw new TypeError('Please mention a registration number to look for')
  }

  const matchesObject = getMatchingValues(lot, value => value.plate === plate)
  return matchesObject
}

module.exports = slotForRegistration
