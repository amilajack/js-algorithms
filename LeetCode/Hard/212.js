// 212. Word Search II
// Given a 2D board and a list of words from the dictionary, find all words in the board.
// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent"
// cells are those horizontally or vertically neighboring. The same letter cell may not be used
// more than once in a word.

const findWordsAux = (board, trie, i, j, char, visited, ans) => {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
  if (visited[i][j] === 1) return;
  if (!trie.has(board[i][j])) return;
  char += board[i][j];
  const child = trie.get(board[i][j]);
  if (child.has('END')) {
    ans.push(char);
  }
  visited[i][j] = 1;
  findWordsAux(board, child, i, j - 1, char, visited, ans);
  findWordsAux(board, child, i, j + 1, char, visited, ans);
  findWordsAux(board, child, i - 1, j, char, visited, ans);
  findWordsAux(board, child, i + 1, j, char, visited, ans);
  visited[i][j] = 0;
};

const createTrie = words => {
  const trie = new Map();
  for (const word of words) {
    let tmp = trie;
    for (const char of Array.from(word)) {
      if (!tmp.has(char)) {
        tmp.set(char, new Map());
      }
      tmp = tmp.get(char);
    }
    tmp.set('END', null);
  }
  return trie;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
export default function findWords(board, words) {
  // build a trie
  const trie = createTrie(words);
  const ans = [];

  // Create the visited matrix
  const visited = [];
  for (let i = 0; i < board.length; i++) {
    visited[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      visited[i][j] = 0;
    }
  }

  // Iterate over each position and call recursively
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      findWordsAux(board, trie, i, j, '', visited, ans);
    }
  }

  return Array.from(new Set(ans));
}
