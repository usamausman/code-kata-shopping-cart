const assert = require('assert')
const checkout = require('../lib/checkout')

describe('checkout()', () => {
  it('should be 0 for empty input', () => {
    assert.equal(checkout(''), 0)
  })

  it('should be 0 for unspecified input', () => {
    assert.equal(checkout('E'), 0)
    assert.equal(checkout('$'), 0)
    assert.equal(checkout('1'), 0)
    assert.equal(checkout(' '), 0)
  })

  it('should price each item', () => {
    assert.equal(checkout('A'), 50)
    assert.equal(checkout('B'), 30)
    assert.equal(checkout('C'), 20)
    assert.equal(checkout('D'), 10)
  })
})

// | Item  | Price | Offer     |
// | :---: | :---: | :---:     |
// | A     | 50    | 3 for 130 |
// | B     | 30    | 2 for 37  |
// | C     | 20    | N/A       |
// | D     | 10    | N/A       |

// For example:
// - `'DABA'` gives `140`
// - `'BBBB'` gives `74`
