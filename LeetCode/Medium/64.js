// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom
// right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

// Observations:
// This is a DP problem. The shortest path of location i, j is the Min of down or right

/**
 * @param {number[][]} grid
 * @return {number}
 */

const traverse = (grid, i, j, dpTable) => {
  if (i === grid.length - 1 && j === grid[0].length - 1) return grid[i][j];
  if (i < 0 || j < 0 || i === grid.length || j === grid[0].length)
    return Infinity;
  if (dpTable[i][j]) return dpTable[i][j];
  const min = Math.min(
    traverse(grid, i + 1, j, dpTable),
    traverse(grid, i, j + 1, dpTable)
  );
  const res = grid[i][j] + min;
  dpTable[i][j] = res;
  return res;
};

export default function minPathSum(grid) {
  const dpTable = new Array(grid.length);
  for (let i = 0; i < grid.length; i++) {
    dpTable[i] = [];
  }
  return traverse(grid, 0, 0, dpTable);
}
