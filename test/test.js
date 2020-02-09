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

  it('should price multiple items together', () => {
    assert.equal(checkout('ABCD'), 110)
  })

  it('should apply discounts', () => {
    assert.equal(checkout('AAA'), 130)
    assert.equal(checkout('BB'), 37)
    assert.equal(checkout('DABA'), 140)
    assert.equal(checkout('BBBB'), 74)
  })
})