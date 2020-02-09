const price = { A: 50, B: 30, C: 20, D: 10 }
const discountPrice = { A: 130, B: 37, C: 0, D: 0 }
const discountedAt = { A: 3, B: 2, C: 0, D: 0 }

const checkout = (items) => {
  let cost = 0

  let count = { A: 0, B: 0, C: 0, D: 0 }

  for (let item of items) {
    if (item in price) {
      count[item] += 1
      cost += price[item]
    }
  }

  for (let item in price) {
    if (discountedAt[item] > 0) {
      const offerCount = Math.floor(count[item] / discountedAt[item])
      cost -= offerCount * ((discountedAt[item] * price[item]) - discountPrice[item])
    }
  }

  // cost += (count['A'] % 3) * 50 + Math.floor(count['A'] / 3) * 130
  // cost += (count['B'] % 2) * 30 + Math.floor(count['B'] / 2) * 37
  // cost += count['C'] * 20
  // cost += count['D'] * 10

  return cost
}

module.exports = checkout
