/**
 * Recursively find the length of an array by taking the length of the array
 * minus the first item
 *
 * Here's what that would look like:
 *
 * ArrayLength([1, 2, 3])
 * 1 + ArrayLength([2, 3])
 * 1 + 1 + ArrayLength([3])
 * 1 + 1 + 1 + ArrayLength([])
 * 1 + 1 + 1 + 0
 *
 * @flow
 */

/* eslint no-unused-vars: 0 */
import { expect } from 'chai'


export default function ArrayLength(array: number[]): number {
  switch (Array.isArray(array)) {
    case true: {
      const [first, ...rest] = array
      return 1 + ArrayLength(rest)
    }
    default:
      return 0
  }
}

test('ArrayLength()', () => {
  expect(ArrayLength([1, 3, 4, 5])).to.equal(4)
})
