function slotsForCarsWithColor (lot, color) {
  if (color === undefined) {
    return 'Please mention a color to look for'
  }

  const matchesObject = getMatchingSlots(lot, color)
  const matchesArray = Object.keys(matchesObject)

  return matchesArray.length > 0 ? matchesArray.join(', ') : 'Not found'
}

function getMatchingSlots (lot, color) {
  const matches = {}
  for (let key in lot) {
    if (lot[key] && lot[key].color === color) {
      matches[key] = lot[key]
    }
  }
  return matches
}

module.exports = slotsForCarsWithColor
