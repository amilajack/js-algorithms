/*
 * Complete the 'findRiskScores' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY elevations as parameter.
 */

function findHighPointsAux(elevations, i, j) {
  // out of bounds, return flat land
  if (i < 0 || j < 0 || i >= elevations.length || j >= elevations[0].length)
    return 0;
  return elevations[i][j];
}

function findHighPoints(elevations) {
  const grid = new Array(elevations.length);
  for (let i = 0; i < elevations.length; i++) {
    grid[i] = new Array(elevations[i].length).fill(false);
    for (let j = 0; j < elevations[i].length; j++) {
      const curr = elevations[i][j];
      const a = curr > findHighPointsAux(elevations, i + 1, j + 1);
      const b = curr > findHighPointsAux(elevations, i - 1, j - 1);
      const c = curr > findHighPointsAux(elevations, i + 1, j);
      const d = curr > findHighPointsAux(elevations, i - 1, j);
      const e = curr > findHighPointsAux(elevations, i, j + 1);
      const f = curr > findHighPointsAux(elevations, i, j - 1);
      const g = curr > findHighPointsAux(elevations, i - 1, j + 1);
      const h = curr > findHighPointsAux(elevations, i + 1, j - 1);
      if (a && b && c && d && e && f && g && h) {
        grid[i][j] = true;
      }
    }
  }
  return grid;
}

export default function findRiskScores(elevations) {
  const risks = new Array(elevations.length);
  for (let i = 0; i < elevations[i].length; i++) {
    elevations[i] = new Array(elevations[i].length).fill(0);
    findHighPoints(elevations);
  }
  return risks;
}
