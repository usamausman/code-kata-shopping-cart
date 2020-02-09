const checkout = (items) => {
  let cost = 0

  let count = { A: 0, B: 0, C: 0, D: 0 }

  for (item of items) {
    count[item] += 1

    // switch (item) {
    //   case 'A': {
    //     cost += 50
    //     break
    //   }
    //   case 'B': {
    //     cost += 30
    //     break
    //   }
    //   case 'C': {
    //     cost += 20
    //     break
    //   }
    //   case 'D': {
    //     cost += 10
    //     break
    //   }
    // }
  }

  cost += (count['A'] % 3) * 50 + Math.floor(count['A'] / 3) * 130
  cost += (count['B'] % 2) * 30 + Math.floor(count['B'] / 2) * 37
  cost += count['C'] * 20
  cost += count['D'] * 10

  return cost
}

module.exports = checkout
