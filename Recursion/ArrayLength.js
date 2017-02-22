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
import { expect } from 'chai';


function ArrayLength(array: number[]): number {
  switch (array.length !== 0) {
    case true: {
      array.splice(0, 1);
      return 1 + ArrayLength(array);
    }
    default:
      return 0;
  }
}

test('ArrayLength()', () => {
  expect(ArrayLength([1, 3, 4, 5])).to.equal(4);
});
