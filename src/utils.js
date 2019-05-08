function getParams (command) {
  return command.trim().split(/\s+/)
}

function getMatchingValues (obj, predicate) {
  const matches = {}
  for (let key in obj) {
    if (obj[key] && predicate(obj[key])) {
      matches[key] = obj[key]
    }
  }
  return matches
}

function printLotDetails (lot) {
  const obj = getMatchingValues(lot, value => value !== null)
  console.table(obj)
}

function autoComplete (line) {
  // autocomplete method for commands for the CLI
  const commands = [
    'create_parking_lot',
    'park',
    'leave',
    'registration_numbers_for_cars_with_colour',
    'slot_numbers_for_cars_with_colour',
    'slot_number_for_registration_number'
  ]

  const input = line.trim()

  if (input.length === 0) {
    return [commands, input]
  }

  const hits = commands.filter(command => command.startsWith(input))
  return [hits, input]
}

module.exports = { autoComplete, getParams, getMatchingValues, printLotDetails }
