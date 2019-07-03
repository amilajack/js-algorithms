// 169. Majority Element

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

// Time: O(n)
// Sace: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
export default function majorityElement(nums) {
  if (!nums.length) return 0;
  let majorityIndex = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    // If current num === majority number, count++
    if (nums[i] === nums[majorityIndex]) {
      count++;
    } else {
      count--;
    }
    // If count === 0, set to current num
    if (count === 0) {
      majorityIndex = i;
      count = 1;
    }
  }

  return nums[majorityIndex];
}
