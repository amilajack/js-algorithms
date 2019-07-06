// Taken from http://www.geeksforgeeks.org/backttracking-set-2-rat-in-a-maze/
//
// We have discussed Backtracking and Knight’s tour problem in Set 1. Let us
// discuss Rat in a Maze as another example problem that can be solved using
// Backtracking.
//
// A Maze is given as N*N binary matrix of blocks where source block is the
// upper left most block i.e., maze[0][0] and destination block is lower
// rightmost block i.e., maze[N-1][N-1]. A rat starts from source and has to
// reach destination. The rat can move only in two directions: forward and down.
// In the maze matrix, 0 means the block is dead end and 1 means the block can
// be used in the path from source to destination. Note that this is a simple
// version of the typical Maze problem. For example, a more complex version can
// be that the rat can move in 4 directions and a more complex version can be
// with limited number of moves.
//
// Following is an example maze. Show
//
// @flow
type num = number;
type mazeType = Array<Array<num>>;

const solutions = [];

export default function Maze(
  maze: mazeType,
  x: num,
  y: num,
  path: mazeType = []
) {
  const mazeLength = maze.length;

  if (x === maze.length - 1 && y === maze.length - 1) {
    solutions.push(path);
  }

  const yPath = [...path];
  yPath.push([x + 1, y]);

  const xPath = [...path];
  xPath.push([x, y + 1]);

  if (maze[x][y] > 0) {
    if (x + 1 < mazeLength) Maze(maze, x + 1, y, yPath);
    if (y + 1 < mazeLength) Maze(maze, x, y + 1, xPath);
  }

  return solutions;
}
