// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint
// stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob
// tonight without alerting the police.

// Explaination:
// https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems

const robAux = (nums, i, map) => {
  if (i >= nums.length) return 0;
  if (map.has(i)) return map.get(i);
  const a = robAux(nums, i + 1, map);
  const b = robAux(nums, i + 2, map);
  const curr = Math.max(a, b + nums[i]);
  map.set(i, curr);
  return curr;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export default function rob(nums) {
  const map = new Map();
  return robAux(nums, 0, map);
}
