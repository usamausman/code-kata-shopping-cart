const checkout = require('./lib/checkout')

if (process.argv.length < 3) {
  console.error('Usage: node main.js [number]')
} else {
  const input = process.argv[2]

  console.log(checkout(input))
}