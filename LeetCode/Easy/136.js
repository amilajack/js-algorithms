// Given an array of integers, every element appears twice except for one.
// Find that single one.
//
// Your algorithm should have a linear runtime complexity. Could you implement
// it without using extra memory?
//
// @flow
import { expect } from 'chai'


const set = new Set()

/**
 * @complexity: O(n)
 */
function SingleNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
  }

  const item = Array.from(set)[0]
  set.clear()

  return item
}

test('SingleNumber()', () => {
  expect(SingleNumber([1])).to.equal(1)
  expect(SingleNumber([1, 1, 2, 2, 3, 3, 4])).to.equal(4)
})
