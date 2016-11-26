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

/**
 * @complexity: O(1)
 */
function SumArrayLength(first: num, second: num): num {
  const _first = new Array(first)
  const _second = new Array(second)
  return [..._first, ..._second].length
}

/**
 * @complexity: O(1)
 */
function Sum(first: num, second: num): num {
  const _first = new Array(Math.abs(first))
  const _second = new Array(Math.abs(second))
  const negatives = []
  const positives = []

  while (_first.length !== 0) {
    // If negative, remove
    if (_first.length > 0 && first < 0 && positives.length) {
      positives.splice(0, 1)
    } else {
      negatives.push('-')
    }
    _first.splice(0, 1)
  }

  while (_second.length !== 0) {
    // If negative, remove
    if (_second.length > 0 && second < 0 && positives.length) {
      positives.splice(0, 1)
    } else {
      negatives.push('-')
    }
    _second.splice(0, 1)
  }

  return positives.length === 0
    ? negatives.length === 0
      ? 0
      : negatives.length
    : positives.length
}

test('Sum()', () => {
  expect(SumArrayLength(1, 2)).to.equal(3)
  expect(SumArrayLength(10, 20)).to.equal(30)

  expect(Sum(1, 2)).to.equal(3)
  expect(Sum(10, 20)).to.equal(30)
})
