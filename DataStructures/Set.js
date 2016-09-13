/**
 * Sets are unordered lists of objects
 *
 * Their order cannot be guaranteed to be the same as the order in
 * which they were inserted.
 *
 * @TODO: Add support for object literals
 */
const Hash = require('./_Hash')
const expect = require('chai').expect


function Set() {
  this.items = []
  this.itemsLength = 0
  this.setLength = 50
}

Set.prototype = {
  /**
   * The runtime cost of this is O(2n) because we need to compute
   * the hash and lookup the element. Each of these operations is O(1)
   */
  add(value) {
    this.items[Hash(value)] = value
    // Updating the itemsLength would increase insertion complexity to O(3n)
    // this.itemsLength++
  },

  /**
   * Accessing values in a Set is O(2n) because we only need
   * to compute the hash
   */
  contains(value) {
    return !!this.items[Hash(value)]
  },

  /**
   * Accessing values in a Set is O(1)
   */
  remove() {
    this.items[Hash(value)] = undefined
    this.itemsLength--
  },

  /**
   *
   */
  all() {
    return this.items.filter(i => !!i)
  }
}

// Assert insert
const Set_1 = new Set()

Set_1.add('some')
expect(Set_1.all()).to.eql(['some']);
Set_1.add('who')
expect(Set_1.all()).to.eql(['some', 'who']);
