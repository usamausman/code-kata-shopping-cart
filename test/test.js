const assert = require('assert')
const double = require('../lib/double')

describe('double', () => {
  it('should double the input', () => {
    assert.equal(double(0), 0)
    assert.equal(double(1), 2)
  })
})