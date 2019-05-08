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
        const matches = registrationForColor(lot, params[1])
        msg = getOutputString(getValuesFromObject(matches, 'plate'))
        break
      }
      case 'slot_numbers_for_cars_with_colour': {
        const matches = slotForCarsWithColor(lot, params[1])
        msg = getOutputString(getValuesFromObject(matches, 'slot'))
        break
      }
      case 'slot_number_for_registration_number': {
        const matches = slotForRegistration(lot, params[1])
        msg = getOutputString(getValuesFromObject(matches, 'slot'))
        break
      }
      case 'status': {
        const obj = getLotDetails(lot)
        console.table(obj)
        break
      }
      default: {
        throw new Error('Invalid command')
      }
    }
    writeToStdOutput(msg)
  } catch (err) {
    writeToStdOutput(err.message)
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
  if (!Array.isArray(arr)) {
    throw new TypeError('Input should be an array')
  }
  return arr.length > 0 ? arr.join(', ') : 'Not found'
}

module.exports = { runCommand, getValuesFromObject, getOutputString }
