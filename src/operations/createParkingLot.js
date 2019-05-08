function createParkingLot (lot, n) {
  const num = parseInt(n)

  if (isNaN(num)) {
    return 'enter a valid number'
  }

  if (Object.keys(lot).length > 0) {
    return 'A lot was already created, cannot create another one'
  }

  for (let i = 1; i <= num; i += 1) {
    lot[i] = null
  }

  return `Created a parking lot with ${num} slots`
}

module.exports = createParkingLot
