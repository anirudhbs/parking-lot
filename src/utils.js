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

module.exports = { getParams, getMatchingValues }
