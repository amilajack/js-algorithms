// Validate if a board is invald
import { expect } from 'chai'

const some = [
  [0,0], [1,0], [2,0],
  [0,1], [1,1], [2,1],
  [0,2], [1,2], [2,2]
]

console.clear()

function flatten(array) {
  return array.reduce((prev, next) => [...prev, ...next], [])
}

function dupeRight(array) {
  return array.map(each => [each[0] + 3, each[1]])
}

function dupeBottom(array) {
  return array.map(each => [each[0], each[1] + 3])
}

/**
 * @complexity Time Compexity: O(n^2)
 *             where n is the number of rows of the board
 * @param {number}
 */
function dupe(rowCount = 3) {
  const items = []

  items.push(some)

  for (let start = 0; start < rowCount; start++) {
    for (let inner = 0; inner < rowCount - 1; inner++) {
      items.push(dupeRight(items[items.length - 1]))
    }
    
    if (start !== 0) {
      items.push(dupeBottom(items[items.length - 3]))
    }
  }

  return items;
}

// 
// Tests
// 

// Test dupeRight
expect(dupeRight(some)).to.eql([
  [3,0], [4,0], [5,0],
  [3,1], [4,1], [5,1],
  [3,2], [4,2], [5,2]
])

// Test dupeBottom
expect(dupeBottom(some)).to.eql([
  [0,3], [1,3], [2,3],
  [0,4], [1,4], [2,4],
  [0,5], [1,5], [2,5]
])

// Test flatten
expect(flatten([[1, 3], [6, 5]])).to.eql([1, 3, 6, 5])

console.log(dupe())
