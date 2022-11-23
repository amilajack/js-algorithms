// 53. Maximum Subarray

// Given an integer array nums, find the subarray which has the largest sum and return its sum.

// Example:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
 export default function maxSubArray(nums) {
    let maxSum = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
  }
  