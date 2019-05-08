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

rl.on('line', line => {
  if (line.trim() === 'exit') {
    rl.close()
    return
  }

  if (line.trim() !== '') {
    const params = getParams(line)
    runCommand(rl, params)
  }
})

rl.on('close', () => {
  process.stdout.write('goodbye!\n')
})

// handle exit here instead of in lot.js
