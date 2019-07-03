// 229. Majority Element II

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:

// Input: [3,2,3]
// Output: [3]
// Example 2:

// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function majorityElement(nums) {
  if (!nums.length) return [];
  let count1 = 0;
  let count2 = 0;
  let maj1 = null;
  let maj2 = null;
  // Find the two numbers that occur the most
  for (const num of nums) {
    if (num === maj1) {
      count1++;
    } else if (num === maj2) {
      count2++;
    } else if (count1 === 0) {
      maj1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      maj2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  // Filter any of the two numbers that do not occur more than len / 3 times
  return [maj1, maj2].filter(e => {
    let i = 0;
    for (const num of nums) {
      if (num === e) {
        i++;
      }
    }
    return i > nums.length / 3;
  });
}
