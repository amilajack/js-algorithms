import Maze from '../Puzzles/Maze';


describe('Puzzles', () => {
  test('Maze()', () => {
    // 1 solution
    const maze1 = [
      [1, 0, 0, 0],
      [1, 1, 0, 1],
      [0, 1, 0, 0],
      [1, 1, 1, 1]
    ];

    // 1 solution
    const maze2 = [
      [1, 0, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 0, 1],
      [1, 1, 1, 1]
    ];

    // 2 solution
    const maze3 = [
      [1, 0, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 0, 1],
      [1, 1, 1, 1]
    ];
    Maze(maze1, 0, 0);
    expect(Maze(maze1, 0, 0)).toEqual([[1, 0], [1, 1], [2, 1], [3, 1], [3, 2], [3, 3]]);

    Maze(maze2, 0, 0);
    expect(Maze(maze1, 0, 0)).toEqual([[1, 0], [1, 1], [1, 2], [1, 3], [2, 3], [3, 3]]);

    Maze(maze3, 0, 0);
    expect(Maze(maze1, 0, 0)).toEqual([[1, 0], [1, 1], [2, 1], [3, 1], [3, 2], [3, 3]]);
    expect(Maze(maze1, 0, 0)).toEqual([[1, 0], [1, 1], [1, 2], [1, 3], [2, 3], [3, 3]]);
  });
});
