/**
 * Sets are unordered lists of objects
 *
 * Their order cannot be guaranteed to be the same as the order in
 * which they were inserted.
 *
 * @flow
 */
import { expect } from 'chai'
import Hash from './Hash'


function Set() {
  this.items = []
  this.itemsLength = 0
}

Set.prototype = {

  /**
   * Complexity: O(n)
   */
  add(value: any): bool {
    this.items[Hash(value)] = value
    this.itemsLength++
    return true
  },

  /**
   * Complexity: O(1)
   */
  contains(value: any): bool {
    return !!this.items[Hash(value)]
  },

  /**
   * Complexity: O(1)
   */
  remove(value: any) {
    this.items[Hash(value)] = null
    this.itemsLength--
  },

  /**
   * Complexity: O(1)
   *
   * This complexity is a bit weird in Javascript. The array needs to be filtered
   * to remove null values, which are added when creating an array with a fixed
   * length (ex. array[42] = 'some')
   */
  all(): any[] {
    return this.items.filter((i: any): bool => !!i) // eslint-disable-line
  }
}

test('Set', () => {
  // Assert insert
  const _Set = new Set()

  _Set.add('some')
  expect(_Set.all()).to.eql(['some'])
  _Set.add('who')
  expect(_Set.all()).to.eql(['some', 'who'])
  _Set.remove('who')
  expect(_Set.all()).to.eql(['some'])
})
