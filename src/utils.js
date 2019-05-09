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
  // returns object with details of all the occupied slots in the parking lot
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

function writeToStdOutput (msg) {
  if (typeof msg === 'string') {
    process.stdout.write(`${msg}\n`)
  } else {
    printTable(msg)
  }
}

function printTable (arr) {
  console.table(arr)
}

module.exports = {
  autoComplete,
  getParams,
  getMatchingValues,
  getLotDetails,
  writeToStdOutput,
  printTable
}
