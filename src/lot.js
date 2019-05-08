const createParkingLot = require('./operations/createParkingLot')
const park = require('./operations/park')
const leave = require('./operations/leave')

const registrationForColor = require('./queries/registrationForColor')
const slotForCarsWithColor = require('./queries/slotForCarsWithColor')
const slotForRegistration = require('./queries/slotForRegistration')

const { getLotDetails, writeToStdOutput } = require('./utils')

const lot = {}

function runCommand (params) {
  let msg = ''
  try {
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
      case 'status': {
        const obj = getLotDetails(lot)
        console.table(obj)
        break
      }
      default: {
        msg = 'enter a valid command'
      }
    }
    writeToStdOutput(msg)
  } catch (err) {
    writeToStdOutput(err)
  }
}

function getValuesFromObject (obj, data) {
  const arr = []
  for (let key in obj) {
    if (data === 'slot') {
      arr.push(key)
    } else {
      obj[key][data] && arr.push(obj[key][data])
    }
  }
  return arr
}

function getOutputString (arr) {
  return null
}

module.exports = { runCommand, getValuesFromObject, getOutputString }
