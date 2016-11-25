// @flow
import { expect } from 'chai'


function BinarySearchRecursive(items: number[], element: number): number {
  const middleIndex = Math.floor(items.length / 2)

  // Base Case
  if (items.length === 1) {
    return items[0]
  }

  if (items[middleIndex] <= element) {
    return BinarySearchRecursive(items.splice(middleIndex, items.length - 1), element)
  }

  return BinarySearchRecursive(items.splice(0, middleIndex), element)
}

function BinarySearchIterative(items: number[], element: number): number {
  let low = 0
  let high = items.length - 1

  while (low < high) {
    const middle = Math.floor((high + low) / 2)
    // Check middle value
    if (items[middle] === element) return middle

    if (items[middle] > element) {
      high = middle - 1
    } else {
      low = middle + 1
    }
  }

  if (items[low] === element) return low

  return -1
}


test('BinarySearchRecursive()', () => {
  expect(BinarySearchRecursive([1, 3, 5, 13, 25, 50], 25)).to.equal(25)
  expect(BinarySearchRecursive([1, 13, 35, 713, 3525, 26650], 26650)).to.equal(26650)
  expect(BinarySearchIterative([1], 1)).to.equal(0)
  expect(BinarySearchIterative([1, 2], 2)).to.equal(1)
  expect(BinarySearchIterative([1, 3, 5, 13, 25, 50], 25)).to.equal(4)
  expect(BinarySearchIterative([1, 13, 35, 713, 3525, 26650], 26650)).to.equal(5)
  expect(BinarySearchIterative([1, 2, 3, 4, 5], 1)).to.equal(0)
  expect(BinarySearchIterative([1, 2, 3, 5], 4)).to.equal(-1)
  expect(BinarySearchIterative([1, 2, 3, 4, 5], 6)).to.equal(-1)
  expect(BinarySearchIterative([1, 2, 3, 4, 5], 0)).to.equal(-1)
})
