// Give an array of salaries. The total salary has a budget. At the beginning, the total salary of employees is larger
// than the budget. It is required to find the number k, and reduce all the salaries larger than k to k, such that the
// total salary is exactly equal to the budget.

// Example 1:

// Input: salaries = [100, 300, 200, 400], budget = 800
// Output: 250
// Explanation: k should be 250, so the total salary after the reduction 100 + 250 + 200 + 250 is exactly equal to 800.
// You can assume that solution always exists.

// Observations:
// We can start by sorting the array. Then start with the last element k. Find the value that when substituted for k
// we achieve the budget. If the k-1 element is greater than this value then do the same for both of those values.
//
// Example:
// salaries = [100, 300, 200, 400], budget = 800
// sort -> [100, 200, 300, 400]
// solve for kth element": 100 + 200 + 300 + k = 800, k = 200
// Compare with previous element to check if it is < k
// 300 < 200 === false, so we swap the k-1th element and solve for both
// solve for kth element": 100 + 200 + k + k = 800, k = 250
// Compare with previous element to check if it is < k
// 200 < 250 === true, so we are done. return k

// Time: O(nlogn)
// Space; O(1)

export default function salaryAdjustment(salaries, budget) {
  salaries.sort((a, b) => a - b).reverse();
  let adj = 0;
  let sum = salaries.reduce((p, c) => p + c, 0);
  if (sum <= budget) return adj;
  for (let i = 0; i < salaries.length; i++) {
    sum -= salaries[i];
    adj = (budget - sum) / (i + 1);
    if (salaries[i + 1] <= adj) break;
  }
  return adj;
}
