function leave (lot, slot) {
  const slotNumber = parseInt(slot)

  if (isNaN(slotNumber) || slotNumber > Object.keys(lot).length) {
    throw new TypeError('Please enter a valid slot number')
  }

  if (lot[slot] === null) {
    throw new Error('The slot is already empty')
  }

  const newLot = Object.assign({}, lot)
  newLot[slot] = null

  return [newLot, slot]
}

module.exports = leave
