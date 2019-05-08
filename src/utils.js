function getParams (command) {
  return command.trim().split(' ')
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

function autoComplete () {
  return null
}

module.exports = { autoComplete, getParams, getMatchingValues, printLotDetails }
