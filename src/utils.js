const commands = require('../src/COMMANDS')

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

function getLotDetails (lot) {
  // filter out empty slots
  const obj = getMatchingValues(lot, value => value !== null)
  return obj
}

function autoComplete (line) {
  // autocomplete method for commands for the CLI
  const input = line.trim()

  if (input.length === 0) {
    return [commands, input]
  }

  const hits = commands.filter(command => command.startsWith(input))
  return [hits, input]
}

module.exports = { autoComplete, getParams, getMatchingValues, getLotDetails }
