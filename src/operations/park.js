function park (lot, plate, color) {
  if (typeof plate !== 'string' || typeof color !== 'string') {
    throw new TypeError('Invalid input, make sure you enter both the plate, and the color')
  }
  let num = null
  const slots = Object.keys(lot)

  // find the first open slot, ie. first value to be null
  for (let i = 1; i <= slots.length; i += 1) {
    if (lot[i] === null) {
      num = i
      break
    }
  }
  if (num === null) {
    throw new Error('Sorry, parking lot is full')
  }

  lot[num] = { plate, color }

  return `Allocated slot number: ${num}`
}

module.exports = park
