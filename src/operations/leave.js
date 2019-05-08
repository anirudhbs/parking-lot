function leave (lot, slot) {
  const slotNumber = parseInt(slot)

  if (isNaN(slotNumber) || slotNumber > Object.keys(lot).length) {
    throw new TypeError('Please enter a valid slot number')
  }

  if (lot[slot] === null) {
    throw new Error('The slot is already empty')
  }

  lot[slotNumber] = null
  return `Slot number ${slot} is free`
}

module.exports = leave
