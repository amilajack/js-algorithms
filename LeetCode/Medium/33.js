/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binSearch = (nums, target, n, m) => {
  if (n === m || m < n) {
    return nums[n] === target ? n : -1;
  }
  const mid = Math.floor((n + m) / 2);
  if (target === nums[mid]) return mid;
  // console.log(n, m, mid)
  if (target > nums[mid]) {
    return binSearch(nums, target, mid + 1, m);
  }
  return binSearch(nums, target, n, mid - 1);
};

export default function search(nums, target) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] > nums[high]) low += 1;
    else high = mid;
  }

  const minIndex = low;
  const maxIndex = low - 1;

  if (nums[0] < nums[nums.length - 1]) {
    return binSearch(nums, target, 0, nums.length - 1);
  }

  if (target > nums[0]) {
    return binSearch(nums, target, 1, maxIndex);
  }
  if (target < nums[0]) {
    return binSearch(nums, target, minIndex, nums.length - 1);
  }
  return 0;
}
