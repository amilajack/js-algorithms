/**
 * Moore's Voting Algorithm finds the majority element in an array that has a majority element.
 */
export default function MooresVotingAlgorithm(nums: number[]): number {
  if (!nums.length) return -1;
  let majorityIndex = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    // If current num === majority number, count++
    if (nums[i] === nums[majorityIndex]) {
      count++;
    } else {
      count--;
    }
    // If count === 0, set to current num
    if (count === 0) {
      majorityIndex = i;
    }
  }

  return nums[majorityIndex];
}
