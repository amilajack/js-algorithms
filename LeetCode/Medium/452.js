// 452. Minimum Number of Arrows to Burst Balloons

// There are a number of spherical balloons spread in two-dimensional space. For each balloon, provided input is the
// start and end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates don't matter and hence
// the x-coordinates of start and end of the diameter suffice. Start is always smaller than end. There will be at most 104 balloons.

// An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with xstart and xend
// bursts by an arrow shot at x if xstart ≤ x ≤ xend. There is no limit to the number of arrows that can be shot. An
// arrow once shot keeps travelling up infinitely. The problem is to find the minimum number of arrows that must be shot to burst all balloons.

// Example:

// Input:
// [[10,16], [2,8], [1,6], [7,12]]

// Output:
// 2

// Explanation:
// One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11
// (bursting the other two balloons).

// Observations:
// Derivative of interval problem
// Goal: find the number of total overlaps between ballons

// [[10,16], [2,8], [1,6], [7,12]]
// [[1,6], [2,8], [7,12], [10,16]]

// [[1, 6], [2, 8]] // ideal case
// [[1, 6], [6, 8]] // exact case
// [[1, 6], [7, 8]] // unideal case

// [[1, 6], [2, 8], [3, 8]]
// [[1, 6], [2, 8], [9, 18]]

/**
 * @param {number[][]} points
 * @return {number}
 */
export default function findMinArrowShots(points) {
  if (!points.length) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let end = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      end = points[i][1]; // eslint-disable-line
      count++;
    }
  }
  return count;
}
