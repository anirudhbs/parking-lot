const readline = require('readline')

const { autoComplete, getParams, writeToStdOutput, printTable } = require('./utils')
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
    typeof output === 'string' ? writeToStdOutput(output) : printTable(output)
  }
})

rl.on('close', () => {
  writeToStdOutput('goodbye!')
})
