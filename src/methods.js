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

module.exports = {
  createParkingLot
}
