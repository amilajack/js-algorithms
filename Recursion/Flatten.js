/**
 * Take a two dimentional array (array of arrays) and 'flatten' it. In other
 * words, this means to take multiple arrays and merge them together
 *
 * Javascript's Array.prototype.concat would make this easier but it creates a
 * new array every single time
 *
 * Complexity: O(n^2)
 * @flow
 */
import { expect } from 'chai'


type num = number

export default function Flatten(array: Array<Array<num>>, collector: num[] = []): num[] {
  switch (array.length > 0) {
    case true: {
      const [first, ...rest] = array
      return Flatten(rest, [...first, ...collector])
    }
    default:
      return collector
  }
}

let items = []

// [1, [2, [ [3, 4], 5], 6]]
export function FlattenRecursive(array: Array<any> | num): Array<num> {
  for (let i = 0; i < array.length; i++) {
    Array.isArray(array[i])
      ? FlattenRecursive(array[i])
      : items.push(array[i])
  }

  return items
}

test('Flatten', () => {
  expect(
    Flatten([[1, 3, 4, 5], [13, 15, 41, 54]])
  )
  .to.eql([13, 15, 41, 54, 1, 3, 4, 5])
  expect(FlattenRecursive([1, [2]])).to.eql([1, 2])
  items = []
  expect(FlattenRecursive([1, [[[2]]]])).to.eql([1, 2])
  items = []
  expect(FlattenRecursive([1, [2, [[3, 4], 5], 6]])).to.eql([1, 2, 3, 4, 5, 6])
})
