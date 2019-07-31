// 300. Longest Increasing Subsequence

// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.

/**
 * @param {number[]} nums
 * @return {number}
 */
export default function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);

  // current num
  for (let i = 1; i < nums.length; i++) {
    // nums before current num
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(dp[j], max);
      }
    }
    dp[i] = max + dp[i];
  }

  let max = 0;
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] > max) max = dp[i];
  }

  return max;
}
