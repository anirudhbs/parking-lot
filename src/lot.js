const createParkingLot = require('./operations/createParkingLot')
const park = require('./operations/park')
const leave = require('./operations/leave')
const carsWithColor = require('./operations/carsWithColor')

const lot = {}

function runCommand (rl, params) {
  switch (params[0]) {
    case 'create_parking_lot': {
      const msg = createParkingLot(lot, params[1])
      process.stdout.write(`${msg}\n`)
      break
    }
    case 'park': {
      const msg = park(lot, params[1], params[2])
      process.stdout.write(`${msg}\n`)
      break
    }
    case 'leave': {
      const msg = leave(lot, params[1])
      process.stdout.write(`${msg}\n`)
      break
    }
    case 'registration_numbers_for_cars_with_colour': {
      const msg = carsWithColor(lot, params[1])
      process.stdout.write(`${msg}\n`)
      break
    }
    case 'exit': {
      if (rl !== null) {
        rl.close()
      }
      break
    }
    default: {
      process.stdout.write('enter a valid command\n')
    }
  }
}

module.exports = { runCommand }
