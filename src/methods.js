const lot = {}

function createParkingLot (n) {
  const num = parseInt(n)

  if (isNaN(num)) {
    process.stdout.write('enter a valid number\n')
    return false
  }

  for (let i = 1; i <= num; i += 1) {
    lot[i] = null
  }

  const message = `Created a parking lot with ${num} slots`
  process.stdout.write(`${message}\n`)
  return message
}

function park (plate, color) {
  if (typeof plate !== 'string' || typeof color !== 'string') {
    process.stdout.write('Invalid input, make sure you enter both the plate, and the color\n')
    return false
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
    const message = 'All slots in the lot are occupied!'
    process.stdout.write(`${message}\n`)
    return message
  }

  lot[num] = { plate, color }

  const message = `Allocated slot number: ${num}`
  process.stdout.write(`${message}\n`)
  return message
}

module.exports = {
  createParkingLot,
  park
}
