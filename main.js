const checkout = require('./lib/checkout')

if (process.argv.length < 3) {
  console.error('Usage: node main.js [number]')
} else {
  const input = process.argv[2]

  console.log(checkout(input))
}

// You should implement a supermarket checkout which:
// - always accepts a string of items and gives back the total price
// - discounts any offers from the total price

// Use the following pricing information:

// | Item  | Price | Offer     |
// | :---: | :---: | :---:     |
// | A     | 50    | 3 for 130 |
// | B     | 30    | 2 for 37  |
// | C     | 20    | N/A       |
// | D     | 10    | N/A       |