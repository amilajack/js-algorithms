export default function numsAddToTarget(nums, target) {
  let start = 0;
  let windowSum = 0;
  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i];
    if (windowSum === target) return true;
    while (windowSum >= target) {
      windowSum -= nums[start];
      start++;
    }
    start++;
  }
  return false;
}
