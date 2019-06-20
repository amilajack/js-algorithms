// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binSearch = (nums, lo, hi, target, left) => {
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (left) {
      if (nums[lo] === target) return lo;
      if (hi - lo === 1) return hi;
      if (nums[mid] < target) lo = mid;
      else hi = mid;
    } else {
      if (nums[hi] === target) return hi;
      if (hi - lo === 1) return lo;
      if (nums[mid] > target) hi = mid;
      else lo = mid;
    }
  }
};

export default function searchRange(nums, target) {
  if (nums.length === 0) return [-1, -1];
  // bin search for target.
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  if (nums[lo] !== target) return [-1, -1];

  // if left and right not equal to target, we are done
  if (nums[lo - 1] !== target && nums[lo + 1] !== target) return [lo, lo];

  if (nums.length === 2) return [0, 1];

  // if left of target not equal to target, find left
  const left =
    nums[hi - 1] === target ? binSearch(nums, 0, lo, target, true) : hi;

  // if right of target not equal to target, find right
  const right =
    nums[lo + 1] === target
      ? binSearch(nums, hi, nums.length - 1, target, false)
      : lo;

  return [left, right];
}
