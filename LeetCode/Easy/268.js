// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// Observations:
// To solve this most efficiently, take the sum of the array [0, ..., n] and subtract the sum of the given array.
// Finding the sum of the array [0, ..., n] takes constant time with constant space using a gaussian sum
// (see https://en.wikipedia.org/wiki/Gauss_sum). Finding the sum of the given array takes O(n) time. The solution is then
// an O(n) solution with constant space.

/**
 * @param {number[]} nums
 * @return {number}
 */
export default function missingNumber(nums) {
  if (nums.length === 1) {
    return nums[0] === 0 ? 1 : 0;
  }
  const max = nums.length;
  const sum =
    max % 2 === 0 ? (max * (max + 1)) / 2 : max + (max * (max - 1)) / 2;
  let iterSum = 0;
  for (const i of nums) {
    iterSum += i;
  }
  return sum - iterSum;
}
