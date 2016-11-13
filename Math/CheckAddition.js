/**
 * Given a list of numbers and specific integer, check if the sum
 * of any two integers in the list add to equal the given number.
 * 
 * Formally, in the given set of arbitray integers, do an two
 * integers m,n in the set exist such that m + n = k, where k is a
 * given integer?
 */
const { expect } = require('chai')


function CheckAddition(target: number, list: number[]) {
  const set = new Set(list)
  
  for (const n of list) {
    const m = target - n
    if (set.has(m)) {
      return true
    }
  }

  return false
}

expect(CheckAddition(16, [1, 3, 4, 5, 6, 11])).to.equal(true)
expect(CheckAddition(16, [1, 3, 4, 5, 6])).to.equal(false)
