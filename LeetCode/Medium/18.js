// 18. 4Sum
//
// Given an array nums of n integers and an integer target, are there elements a, b, c, and
// d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which
// gives the sum of target.
//
// Note:
// The solution set must not contain duplicate quadruplets.

function fourSumAux(arr, s, i, sum, sumSoFar, ans, set) {
  if (sumSoFar.length === 4 && sum === s) {
    const hash = sumSoFar.join('-');
    if (set.has(hash)) return;
    set.add(hash);
    ans.push(sumSoFar);
    return;
  }
  if (i >= arr.length || sumSoFar.length >= 4) return;
  for (; i < arr.length; i++) {
    fourSumAux(arr, s, i + 1, sum + arr[i], [...sumSoFar, arr[i]], ans, set);
  }
}

export default function fourSum(arr, s) {
  const ans = [];
  const set = new Set();
  fourSumAux(
    arr.sort((a, b) => a - b),
    s,
    0,
    0,
    [],
    ans,
    set
  );
  return ans;
}
