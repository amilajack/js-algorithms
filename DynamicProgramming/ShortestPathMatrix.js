// What is the length of the shortest path from (0,0) to “N"
// * "#” indicates a blocking body of water
// * There is always one neighborhood “N”, can be in any position

// Examples:
// [
//   "   ",
//   " ##",
//   "  N"]

//   [
//   "   ",
//   " ##",
//   "  N"]

// return number, the shortest path
function findNAux(grid, i, j, visited, lenSoFar) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length)
    return Infinity;
  if (visited[i][j] < lenSoFar + grid[i][j]) return Infinity;
  lenSoFar += grid[i][j];
  visited[i][j] = lenSoFar;
  if (i === grid.length - 1 && j === grid[0].length - 1) return lenSoFar;
  const left = findNAux(grid, i - 1, j, visited, lenSoFar);
  const right = findNAux(grid, i + 1, j, visited, lenSoFar);
  const top = findNAux(grid, i, j - 1, visited, lenSoFar);
  const down = findNAux(grid, i, j + 1, visited, lenSoFar);
  const min = Math.min(Math.min(left, right), Math.min(top, down));
  return min;
}

export default function findN(grid) {
  const visited = new Array(grid.length);
  for (let i = 0; i < grid.length; i++) {
    visited[i] = new Array(grid[i].length).fill(Infinity);
  }
  findNAux(grid, 0, 0, visited, 0);
  return visited[grid.length - 1][grid[0].length - 1];
}

// Tests
console.log(findN(['   ', ' ##', '  N']) === 4);
console.log(findN(['N   ', ' ##', '   ']) === 0);
console.log(findN([' ##', '###', '   N']) === Infinity);
console.log(findN([' #N', ' # ', '   ']) === 6);
console.log(findN(['      ', '# ##  ', '#     ', '# ####', '#   N#']) === 8);
