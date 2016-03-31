/**
 * A HashMap is used to map keys to values. It uses a hash function to compute
 * an index that maps to a value
 *
 * TODO: Bucket collision detection and handling
 */

import assert from 'assert'

function HashMap() {
  this.items = []
  this.mapLength = 50
}

/**
 * Generate hash code
 * @param  {string} key
 * @return number
 */
function generateHashCode(key, mapLength) {
  return key.hashCode() % mapLength
}

/**
 * Get the character code of a string
 * @return integer
 */
String.prototype.hashCode = function() {
  let
    hash  = 5381,
    index = this.length

  while (index)
    hash = (hash * 33) ^ this.charCodeAt(--index)

  return hash >>> 0
}

/**
 * Insert
 * @desc   Complexity: O(1)
 * @param  {string} item
 * @return this
 */
HashMap.prototype.insert = function(key, value) {

  let generatedHashCode = generateHashCode(key, this.mapLength)

  this.items[generatedHashCode] = value

  return this
}

/**
 * Search
 *
 * TODO:   Convert bucket type to array, loop through when accessing
 *
 * @desc   Complexity: N/A, depends on strength of hash
 * @param  {string} item
 * @return mixed
 */
HashMap.prototype.access = function(key) {

  let generatedHashCode = generateHashCode(key, this.mapLength)

  return this.items[generatedHashCode]
}

/**
 * Delete
 * @desc   Complexity: O(1)
 * @param  {string} item
 * @return this
 */
HashMap.prototype.delete = function(key) {

  let generatedHashCode = generateHashCode(key, this.mapLength)

  this.items.splice([generatedHashCode], 1)

  return this
}


// Assert insert
const testingInsertHashMap = new HashMap()
testingInsertHashMap.insert('some_random_key', 'some')
let generatedHashCodeInsert = generateHashCode('some_random_key', testingInsertHashMap.mapLength)
assert.equal(testingInsertHashMap.items[generatedHashCodeInsert], 'some')

// Assert delete
const testingDeleteHashMap = new HashMap()
testingDeleteHashMap.insert('some_random_key', 'some')
testingDeleteHashMap.delete('some_random_key')
let generatedHashCodeDelete = generateHashCode('some_random_key', testingDeleteHashMap.mapLength)
assert.equal(testingDeleteHashMap.items[generatedHashCodeDelete], undefined)
