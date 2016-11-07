/**
 * Sets are unordered lists of objects
 *
 * Their order cannot be guaranteed to be the same as the order in
 * which they were inserted.
 *
 * @TODO: Add support for object literals
 */
const Hash = require('./_Hash')
import { expect } from 'chai'


function Set() {
  this.items = []
  // this.itemsLength = 0
}

Set.prototype = {

  /**
   * Complexity: O(2n)
   *
   * The runtime cost of this is O(2n) because we need to compute
   * the hash and lookup the element. Each of these operations is O(1)
   */
  add(value) {
    this.items[Hash(value)] = value
    // Updating the itemsLength would increase insertion complexity to O(3n)
    // this.itemsLength++
  },

  /**
   * Complexity: O(2n) / n/a
   *
   * Accessing values in a Set is O(2n) because we only need
   * to compute the hash
   */
  contains(value) {
    return !!this.items[Hash(value)]
  },

  /**
   * Complexity: O(2n) / n/a
   */
  remove(value) {
    this.items[Hash(value)] = undefined
    // Updating the itemsLength would increase insertion complexity to O(3n)
    // this.itemsLength--
  },

  /**
   * Complexity: O(n)
   *
   * This complexity is a bit weird in Javascript. The array needs to be filtered
   * to remove null values, which are added when creating an array with a fixed
   * length (ex. array[42] = 'some')
   */
  all() {
    return this.items.filter(i => !!i)
  }
}

// Assert insert
const Set_1 = new Set()

Set_1.add('some')
expect(Set_1.all()).to.eql(['some'])
Set_1.add('who')
expect(Set_1.all()).to.eql(['some', 'who'])
Set_1.remove('who')
expect(Set_1.all()).to.eql(['some'])
