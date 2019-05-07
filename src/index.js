const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
  removeHistoryDuplicates: true
})

rl.on('line', command => {
  console.log(`you entered ${command}`)
})

rl.on('close', () => {
  console.log('goodbye!')
})
