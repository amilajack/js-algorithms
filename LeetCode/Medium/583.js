// Given two words word1 and word2, find the minimum number of steps required
// to make word1 and word2 the same, where in each step you can delete one
// character in either string.

// Example:
// Input: "sea", "eat"
// Output: 2
// Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

// Note:
// The length of given words won't exceed 500.
// Characters in given words can only be lower-case letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

/**
 * Longest common subsequence
 */
const LCS = (a, b, n, m, mat) => {
  if (n < 0 || m < 0) return 0;
  if (mat[n][m] !== undefined) return mat[n][m];

  let res;
  if (a[n] === b[m]) {
    res = 1 + LCS(a, b, n - 1, m - 1, mat);
  } else {
    res = Math.max(LCS(a, b, n - 1, m, mat), LCS(a, b, n, m - 1, mat));
  }

  mat[n][m] = res;

  return res;
};

export default function minDistance(word1, word2) {
  // Initialize DP table
  const mat = Array.from(Array(word1.length), () => new Array(word2.length));
  const lcsLength = LCS(word1, word2, word1.length - 1, word2.length - 1, mat);
  return word1.length - lcsLength + word2.length - lcsLength;
}
