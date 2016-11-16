/**
 * @flow
 * @TODO
 */
import { expect } from 'chai'


function BinarySearch(items: number[], element: number): number {
  const middleIndex = Math.floor(items.length / 2)

  // Base Case
  if (items.length === 1) {
    return items[0]
  }

  if (items[middleIndex] <= element) {
    return BinarySearch(items.splice(middleIndex, items.length - 1), element)
  }

  return BinarySearch(items.splice(0, middleIndex), element)
}

test('BinarySearch()', () => {
  expect(BinarySearch([1, 3, 5, 13, 25, 50], 25)).to.equal(25)
  expect(BinarySearch([1, 13, 35, 713, 3525, 26650], 26650)).to.equal(26650)
})
