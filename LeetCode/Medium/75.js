// 75. Sort Colors

// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export default function sortColors(nums) {
  const counts = new Array(3);
  for (const item of nums) {
    counts[item] = counts[item] === undefined ? 1 : counts[item] + 1;
  }
  let index = 0;
  for (let i = 0; i < counts.length; i++) {
    for (let j = 0; j < counts[i]; j++) {
      nums[index] = i;
      index++;
    }
  }
  return nums;
}
