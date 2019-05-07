function leave (lot, slot) {
  const slotNumber = parseInt(slot)

  if (isNaN(slotNumber) || slotNumber > Object.keys(lot).length) {
    return 'Please enter a valid slot number'
  }

  if (lot[slot] === null) {
    return 'The slot is already empty'
  }

  lot[slotNumber] = null
  return `Slot number ${slot} is free`
}

module.exports = leave
