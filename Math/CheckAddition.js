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


function CheckAddition(target: number, list: number[]): boolean {
  const set = new Set(list)

  return list.some((n: number): boolean => {
    const m = target - n
    return set.has(m)
  })
}

expect(CheckAddition(16, [1, 3, 4, 5, 6, 11])).to.equal(true)
expect(CheckAddition(16, [1, 3, 4, 5, 6])).to.equal(false)
