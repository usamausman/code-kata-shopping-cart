const checkout = (str) => {
  let cost = 0

  switch (str) {
    case 'A': {
      cost = 50
      break
    }
    case 'B': {
      cost = 30
      break
    }
    case 'C': {
      cost = 20
      break
    }
    case 'D': {
      cost = 10
      break
    }
    default: {
      cost = 0
      break
    }
  }

  return cost
}

module.exports = checkout
