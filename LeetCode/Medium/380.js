// Design a data structure that supports all following operations in average O(1) time.

// insert(val): Inserts an item val to the set if not already present.
// remove(val): Removes an item val from the set if present.
// getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
// Example:

// // Init an empty set.
// RandomizedSet randomSet = new RandomizedSet();

// // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomSet.insert(1);

// // Returns false as 2 does not exist in the set.
// randomSet.remove(2);

// // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomSet.insert(2);

// // getRandom should return either 1 or 2 randomly.
// randomSet.getRandom();

// // Removes 1 from the set, returns true. Set now contains [2].
// randomSet.remove(1);

// // 2 was already in the set, so return false.
// randomSet.insert(2);

// // Since 2 is the only number in the set, getRandom always return 2.
// randomSet.getRandom();

// Observations:
// use an array for order
// keep track of array indicies mapping to set key
//
// remove:
//   swap with last element, then delete
//   then delete from mappings
// insert:
//   add to end of array
//   then add to mappings
// getRandom:
//   get random array element from array and return

/**
 * Initialize your data structure here.
 */
export default class RandomizedSet {
  constructor() {
    this.set = new Set();
    this.mappings = new Map();
    this.randomArray = [];
    this.last = -1;
  }

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.set.has(val)) return false;
    this.set.add(val);
    this.last++;
    this.randomArray[this.last] = val;
    this.mappings.set(val, this.last);
    return true;
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.set.has(val)) return false;
    this.set.delete(val);
    const itemIndex = this.mappings.get(val);
    const last = this.randomArray[this.last];
    this.randomArray[this.last] = undefined;
    this.randomArray[itemIndex] = last;
    this.mappings.set(last, itemIndex);
    this.mappings.delete(val);
    this.last--;
    return true;
  }

  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    const index = Math.floor(Math.random() * (this.last + 1));
    return this.randomArray[index];
  }
}
