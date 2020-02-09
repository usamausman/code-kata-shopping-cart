const double = require('./lib/double')

if (process.argv.length < 3) {
  console.error('Usage: node main.js [number]')
} else {
  const input = process.argv[2]
  const n = Number(input)

  console.log(double(n))
}