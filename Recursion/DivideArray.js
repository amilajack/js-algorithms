// Recursively divide an array into half until it only has one element
// @flow
import { expect } from 'chai'


const items = []

export default function DivideArray(array: number[]): Array<Array<number>> {
  switch (array.length) {
    case 1:
      items.push(array)
      return items
    default: {
      const middle = Math.ceil(array.length / 2)
      const first = array.splice(middle)
      DivideArray(first)
      DivideArray(array)
      return items
    }
  }
}

test('DivideArray()', () => {
  expect(DivideArray([1, 2, 3, 4, 5])).to.eql([[5], [4], [3], [2], [1]])
})
