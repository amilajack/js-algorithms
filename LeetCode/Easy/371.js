// Sum of Two Integers
//
// Calculate the sum of two integers a and b, but you are not allowed to use
// the operator + and -
//
// ex. Given a = 1 and b = 2, return 3.
//
// @flow
import { expect } from 'chai'


type num = number

export default function Sum(first: num, second: num): num {
  const items = []

  for (let i = 0; i < first; i++) {
    items.push('_')
  }

  for (let i = 0; i < second; i++) {
    items.push('_')
  }

  return items.length
}

test('Sum()', () => {
  expect(Sum(1, 2)).to.equal(3)
  expect(Sum(10, 20)).to.equal(30)
})
