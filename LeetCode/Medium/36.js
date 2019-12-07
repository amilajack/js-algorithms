// 36. Valid Sudoku

// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isNum = n => n !== '.';
const validateRow = (board, row) => {
  const set = new Set();
  for (let i = 0; i < board.length; i++) {
    if (isNum(board[row][i]) && set.has(board[row][i])) return false;
    set.add(board[row][i]);
  }
  return true;
};
const validateCol = (board, col) => {
  const set = new Set();
  for (let i = 0; i < board.length; i++) {
    if (isNum(board[i][col]) && set.has(board[i][col])) return false;
    set.add(board[i][col]);
  }
  return true;
};
const validateSquare = (board, i, j) => {
  const imin = i * 3;
  const imax = imin + 2;
  const jmin = j * 3;
  const jmax = jmin + 2;
  const set = new Set();
  for (let p = imin; p <= imax; p++) {
    for (let k = jmin; k <= jmax; k++) {
      if (isNum(board[p][k]) && set.has(board[p][k])) return false;
      set.add(board[p][k]);
    }
  }
  return true;
};

export default function isValidSudoku(board) {
  for (let i = 0; i < board.length; i++) {
    if (!validateRow(board, i)) return false;
  }
  for (let i = 0; i < board.length; i++) {
    if (!validateCol(board, i)) return false;
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!validateSquare(board, i, j)) return false;
    }
  }
  return true;
}
