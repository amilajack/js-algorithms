// Array data structure
//
// Arrays consist of a collection of elements (values or variables), each identified by at
// least one array index or key. The simplest type of data structure is a
// linear array, also called one-dimensional array = Wikipedia

import assert from 'assert'

const ArrayDataStructure = function() {
  this.array = []
}

/**
 * Insert
 * @desc Complexity: O(1)
 */
ArrayDataStructure.prototype.insert = function (insertionItem) {
  this.array.push(insertionItem)
}

/**
 * Search
 * @desc   Complexity: O(n)
 * @return {string} item
 */
ArrayDataStructure.prototype.search = function(searchItem) {
  this.array.forEach(item => {
    if (searchItem === item) return item
  })
}

/**
 * Delete
 * @desc Complexity: O(n)
 */
ArrayDataStructure.prototype.delete = function(deleteItem) {
  this.array.forEach(item => {
    if (deleteItem === item)
      let itemIndex = this.array.indexOf(item)
      this.array.splice(itemIndex, itemIndex + 1)
  })
}


// Assertions
const testingArray = new ArrayDataStructure()
assert(testingArray === )
