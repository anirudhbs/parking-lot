const fs = require('fs')
const path = require('path')

const { getParams, writeToStdOutput } = require('./utils')
const { runCommand } = require('./lot')

const filePath = path.join(__dirname, `../${process.argv[2]}`)

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    writeToStdOutput(err.message)
  } else {
    const commands = data.trim().split('\n')
    for (let i = 0; i < commands.length; i += 1) {
      const params = getParams(commands[i])
      const output = runCommand(params)
      writeToStdOutput(output)
    }
  }
})
