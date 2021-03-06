const readline = require('readline')

const { autoComplete, getParams, writeToStdOutput } = require('./utils')
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
    const output = runCommand(params)
    writeToStdOutput(output)
  }
})

rl.on('close', () => {
  writeToStdOutput('goodbye!')
})
