// Given a binary grid where 0 represents water and 1 represents land. An island is surrounded
// by water and is formed by connecting adjacent lands horizontally or vertically. Delete all
// islands except their borders. A border is land adjacent to water. You may assume all four
// edges of the grid are surrounded by water.

const exampleInput = [
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
];

// Observations:
// You are on the edge if at least one 0 is adjacent to position
function shouldSink(grid, i, j) {
  // out of bounds
  if (i < 1 || i >= grid.length - 1 || j < 1 || j >= grid[0].length - 1) {
    return false;
  }
  // if not an island, don't sink
  if (grid[i][j] === 0) return false;
  if (
    grid[i + 1][j] === 0 ||
    grid[i - 1][j] === 0 ||
    grid[i][j + 1] === 0 ||
    grid[i][j - 1] === 0 ||
    grid[i - 1][j - 1] === 0 ||
    grid[i + 1][j + 1] === 0
  ) {
    return false;
  }
  return true;
}

export default function sinkIsland(grid) {
  const cp = new Array(grid.length);

  for (let i = 1; i < grid.length; i++) {
    cp[i] = new Array(grid[0].length).fill(0);
    for (let j = 1; j < grid[0].length; j++) {
      cp[i][j] = grid[i][j];
      if (shouldSink(grid, i, j)) {
        cp[i][j] = 0;
      }
    }
  }

  return cp;
}

sinkIsland(exampleInput);
