const createParkingLot = require('./operations/createParkingLot')
const park = require('./operations/park')
const leave = require('./operations/leave')
const registrationForColor = require('./operations/registrationForColor')
const slotForCarsWithColor = require('./operations/slotForCarsWithColor')
const slotForRegistration = require('./operations/slotForRegistration')

const lot = {}

function runCommand (rl, params) {
  let msg = ''

  switch (params[0]) {
    case 'create_parking_lot': {
      msg = createParkingLot(lot, params[1])
      break
    }
    case 'park': {
      msg = park(lot, params[1], params[2])
      break
    }
    case 'leave': {
      msg = leave(lot, params[1])
      break
    }
    case 'registration_numbers_for_cars_with_colour': {
      msg = registrationForColor(lot, params[1])
      break
    }
    case 'slot_numbers_for_cars_with_colour': {
      msg = slotForCarsWithColor(lot, params[1])
      break
    }
    case 'slot_number_for_registration_number': {
      msg = slotForRegistration(lot, params[1])
      break
    }
    case 'exit': {
      if (rl !== null) {
        rl.close()
      }
      break
    }
    default: {
      msg = 'enter a valid command'
    }
  }
  process.stdout.write(`${msg}\n`)
}

module.exports = { runCommand }
