function slotForRegistration (lot, plate) {
  if (plate === undefined) {
    return 'Please mention a plate to look for'
  }

  const matchesObject = getMatchingSlots(lot, plate)
  const matchesArray = Object.keys(matchesObject)

  return matchesArray.length > 0 ? matchesArray.join(', ') : 'Not found'
}

function getMatchingSlots (lot, plate) {
  const matches = {}
  for (let key in lot) {
    if (lot[key] && lot[key].plate === plate) {
      matches[key] = lot[key]
    }
  }
  return matches
}

module.exports = slotForRegistration
