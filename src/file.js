const fs = require('fs')
const path = require('path')

const { getParams, writeToStdOutput, printTable } = require('./utils')
const { runCommand } = require('./lot')

const filePath = path.join(__dirname, `../${process.argv[2]}`)

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    writeToStdOutput(err)
  } else {
    const commands = data.trim().split('\n')
    for (let i = 0; i < commands.length; i += 1) {
      const params = getParams(commands[i])
      const output = runCommand(params)
      typeof output === 'string' ? writeToStdOutput(output) : printTable(output)
    }
  }
})
