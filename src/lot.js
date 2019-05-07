const createParkingLot = require('./operations/createParkingLot')
const park = require('./operations/park')

const lot = {}

function runCommand (params) {
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
    default: {
      process.stdout.write('enter a valid command\n')
    }
  }
}

module.exports = { runCommand }
