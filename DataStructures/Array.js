// Array data structure
//
// Arrays consist of a collection of elements (values or variables), each identified by at
// least one array index or key. The simplest type of data structure is a
// linear array, also called one-dimensional array = Wikipedia

import assert from 'assert'

const ArrayDataStructure = function() {
  this.items = []
}

/**
 * Insert
 * @desc Complexity: O(1)
 */
ArrayDataStructure.prototype.insert = function(...insertionItem) {
  insertionItem.forEach(item => {
    this.items.push(item)
  })
  return this
}

/**
 * Search
 * @desc   Complexity: O(n)
 * @return {string} item
 */
ArrayDataStructure.prototype.search = function(searchItem) {
  for (let item of this.items) {
    if (searchItem === item) {
      return item
    }
  }
}

/**
 * Delete
 * @desc Complexity: O(n)
 */
ArrayDataStructure.prototype.delete = function(deleteItem) {
  const item = this.search(deleteItem)
  if (item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
  return this
}

// Assert insert
const testingInsertArray = new ArrayDataStructure()
testingInsertArray.insert(10, 20, 30)
assert.deepEqual(testingInsertArray.items, [10, 20, 30])

// Assert search
const testingSearchArray = new ArrayDataStructure()
testingSearchArray.insert(10, 20, 30)
assert.equal(testingSearchArray.search(20), 20)

// Assert delete
const testingDeleteArray = new ArrayDataStructure()
testingDeleteArray.insert(10, 20, 30)
testingDeleteArray.delete(30)
assert.deepEqual(testingDeleteArray.items, [10, 20])
