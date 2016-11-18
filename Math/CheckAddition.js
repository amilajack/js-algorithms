/**
 * Given a list of numbers and specific integer, check if the sum
 * of any two integers in the list add to equal the given number.
 *
 * Formally, in the given set of arbitray integers, do an two
 * integers m,n in the set exist such that m + n = k, where k is a
 * given integer
 *
 * @flow
 */
import { expect } from 'chai'


function CheckAddition(target: number, list: number[]): bool {
  const set = new Set(list)

  return list.some((n: number): bool => {
    const m = target - n
    return set.has(m) && m !== n
  })
}

test('CheckAddition', () => {
  expect(CheckAddition(16, [1, 3, 4, 5, 6, 11])).to.equal(true)
  expect(CheckAddition(16, [1, 3, 4, 5, 6])).to.equal(false)
  expect(CheckAddition(10, [2, 3, 5])).to.equal(false)
  expect(CheckAddition(10, [2, 3, 5, 5])).to.equal(true)
})
