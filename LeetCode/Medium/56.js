/* eslint-disable */
// 56. Merge Intervals

// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export default function merge(intervals) {
  if (intervals.length === 0) return [];
  if (intervals.length === 1) return intervals;
  intervals = intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  let start = intervals[0][0];
  let end = intervals[0][1];
  const ans = [];
  for (let i = 0; i < intervals.length - 1; i++) {
    const left = intervals[i];
    const right = intervals[i + 1];
    if (right[0] <= end && right[1] >= end) {
      end = right[1]; // then overlap
    } else if (right[0] > end) {
      ans.push([start, end]);
      start = right[0];
      end = right[1];
    }
    if (i === intervals.length - 2) ans.push([start, end]);
  }
  return ans;
}
