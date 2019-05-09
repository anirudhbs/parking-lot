const createParkingLot = require('./operations/createParkingLot')
const park = require('./operations/park')
const leave = require('./operations/leave')

const registrationForColor = require('./queries/registrationForColor')
const slotForCarsWithColor = require('./queries/slotForCarsWithColor')
const slotForRegistration = require('./queries/slotForRegistration')

const { getLotDetails } = require('./utils')

let lot = {}

function runCommand (params) {
  try {
    switch (params[0]) {
      case 'create_parking_lot': {
        return createParkingLot(lot, params[1])
      }
      case 'park': {
        const [newLot, slot] = park(lot, params[1], params[2])
        lot = newLot
        return `Allocated slot number: ${slot}`
      }
      case 'leave': {
        const [newLot, slot] = leave(lot, params[1])
        lot = newLot
        return `Slot number ${slot} is free`
      }
      case 'registration_numbers_for_cars_with_colour': {
        const matches = registrationForColor(lot, params[1])
        return getOutputString(getValuesFromObject(matches, 'plate'))
      }
      case 'slot_numbers_for_cars_with_colour': {
        const matches = slotForCarsWithColor(lot, params[1])
        return getOutputString(getValuesFromObject(matches, 'slot'))
      }
      case 'slot_number_for_registration_number': {
        const matches = slotForRegistration(lot, params[1])
        return getOutputString(getValuesFromObject(matches, 'slot'))
      }
      case 'status': {
        const obj = getLotDetails(lot)
        console.table(obj)
        return ''
      }
      default: {
        throw new Error('Invalid command')
      }
    }
  } catch (err) {
    return err.message
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
