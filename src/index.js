const readline = require('readline')

const { createParkingLot, park } = require('./methods')
const { getParams } = require('./utils')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
  removeHistoryDuplicates: true
})

rl.on('line', command => {
  const params = getParams(command)

  switch (params[0]) {
    case 'create_parking_lot': {
      createParkingLot(params[1])
      break
    }
    case 'park': {
      park(params[1], params[2])
      break
    }
    default: {
      process.stdout.write('enter a valid command\n')
    }
  }
})

rl.on('close', () => {
  process.stdout.write('goodbye!\n')
})
