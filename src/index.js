const readline = require('readline')

const { autoComplete, getParams } = require('./utils')
const { runCommand } = require('./lot')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
  removeHistoryDuplicates: true,
  completer: autoComplete
})

rl.on('line', command => {
  const params = getParams(command)
  runCommand(rl, params)
})

rl.on('close', () => {
  process.stdout.write('goodbye!\n')
})
