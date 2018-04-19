/**
 * Sets are unordered lists of objects
 *
 * Their order cannot be guaranteed to be the same as the order in
 * which they were inserted.
 *
 * @flow
 */
import Hash from './Hash';

function HashSet() {
  this.items = [];
  this.itemsLength = 0;
}

HashSet.prototype = {
  /**
   * Complexity: O(n)
   */
  add(value: any): boolean {
    this.items[Hash(value)] = value;
    this.itemsLength++;
    return true;
  },

  /**
   * Complexity: O(1)
   */
  contains(value: any): boolean {
    return !!this.items[Hash(value)];
  },

  /**
   * Complexity: O(1)
   */
  remove(value: any) {
    this.items[Hash(value)] = null;
    this.itemsLength--;
  },

  /**
   * Complexity: O(1)
   *
   * This complexity is a bit weird in Javascript. The array needs to be filtered
   * to remove null values, which are added when creating an array with a fixed
   * length (ex. array[42] = 'some')
   */
  all(): any[] {
    return this.items.filter((i: any): boolean => !!i); // eslint-disable-line
  }
};

export default HashSet;
