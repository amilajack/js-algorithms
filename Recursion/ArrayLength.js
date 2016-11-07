/**
 * Recursively find the length of an array by taking the length of the array
 * minus the first item
 *
 * Here's what that would look like:
 *
 * getLength([1, 2, 3])
 * 1 + getLength([2, 3])
 * 1 + 1 + getLength([3])
 * 1 + 1 + 1 + getLength([])
 * 1 + 1 + 1 + 0
 *
 * @flow
 */

export default function getLength(array: number[]): number {
  switch (Array.isArray(array)) {
    case true: {
      const [first, ...rest] = array
      return 1 + getLength(rest)
    }
    default:
      return 0
  }
}
