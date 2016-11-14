/**
 * Sets are unordered lists of objects
 *
 * Their order cannot be guaranteed to be the same as the order in
 * which they were inserted.
 *
 * @TODO: Add support for object literals
 */
import { expect } from 'chai'
import Hash from './Hash'


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
  add(value: any): boolean {
    this.items[Hash(value)] = value
    // Updating the itemsLength would increase insertion complexity to O(3n)
    // this.itemsLength++
    return true
  },

  /**
   * Complexity: O(2n) / n/a
   *
   * Accessing values in a Set is O(2n) because we only need
   * to compute the hash
   */
  contains(value: any): boolean {
    return !!this.items[Hash(value)]
  },

  /**
   * Complexity: O(2n) / n/a
   */
  remove(value: any) {
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
  all(): number[] {
    return this.items.filter((i: number): boolean => !!i)
  }
}

// Assert insert
const _Set = new Set()

_Set.add('some')
expect(_Set.all()).to.eql(['some'])
_Set.add('who')
expect(_Set.all()).to.eql(['some', 'who'])
_Set.remove('who')
expect(_Set.all()).to.eql(['some'])
