function park (lot, plate, color) {
  if (typeof plate !== 'string' || typeof color !== 'string') {
    throw new TypeError('Invalid input, make sure you enter both the plate, and the color')
  }
  let slot = null
  const slots = Object.keys(lot)

  // find the first open slot, ie. first value to be null
  for (let i = 1; i <= slots.length; i += 1) {
    if (lot[i] === null) {
      slot = i
      break
    }
  }
  if (slot === null) {
    throw new Error('Sorry, parking lot is full')
  }

  const newLot = Object.assign({}, lot)
  newLot[slot] = { plate, color }

  return [newLot, slot]
}

module.exports = park
