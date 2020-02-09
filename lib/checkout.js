const prices = {
  A: {
    price: 50,
    discount: {
      numberOfItems: 3,
      price: 130,
    },
  },
  B: {
    price: 30,
    discount: {
      numberOfItems: 2,
      price: 37,
    },
  },
  C: {
    price: 20,
  },
  D: {
    price: 10,
  },
}

// returns quotient and remainder after integer division
// note: javascript returns a negative remainder in some cases, the implementation below fixes this
const divmod = (a, b) => [Math.floor(a / b), ((a % b) + b) % b]

const checkout = (items) => {
  let cost = 0

  let count = { A: 0, B: 0, C: 0, D: 0 }

  for (let item of items) {
    // only count items we know the price of
    if (item in prices) {
      count[item] += 1
    }
  }

  for (let item in count) {
    const discount = prices[item].discount

    // if this item can be discounted...
    if (discount) {
      const [offerCount, remainder] = divmod(
        count[item],
        discount.numberOfItems
      )
      cost += offerCount * discount.price + remainder * prices[item].price
    } else {
      cost += count[item] * prices[item].price
    }
  }

  return cost
}

module.exports = checkout
