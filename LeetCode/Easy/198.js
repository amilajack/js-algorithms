// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint
// stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob
// tonight without alerting the police.

// Explaination:
// https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems

/**
 * @param {number[]} nums
 * @return {number}
 */
const robAux = (nums, i, map) => {
  if (i < 0) return 0;
  if (map.has(i)) return map.get(i);
  const a = nums[i] + robAux(nums, i - 2, map);
  const b = robAux(nums, i - 1, map);
  const res = a > b ? a : b;
  map.set(i, res);
  return res;
};

export default function rob(nums) {
  const map = new Map();
  return robAux(nums, nums.length - 1, map);
}
