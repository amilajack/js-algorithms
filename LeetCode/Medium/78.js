// 78. Subsets

// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]
const subsetsAux = (nums, prev, start, res) => {
  if (start === nums.length || start === prev.length) {
    res.push(prev);
    return res;
  }
  const remove = [];
  for (let i = 0; i < prev.length; i++) {
    if (start === i) {
      continue;
    }
    remove.push(prev[i]);
  }
  subsetsAux(nums, [...prev], start + 1, res);
  subsetsAux(nums, [...remove], start, res);
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function subsets(nums) {
  const res = [];
  return subsetsAux(nums, [...nums], 0, res);
}
