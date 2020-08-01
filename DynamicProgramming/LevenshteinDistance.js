// Levenshtein distance is a string metric for measuring the difference between two sequences.
// Levenshtein distance may also be referred to as edit distance

function getEmptyArray(N, M) {
  const arr = new Array(N);
  for (let i = 0; i < N; i++) {
    arr[i] = new Array(M);
    for (let j = 0; j < M; j++) {
      arr[i][j] = 0;
    }
  }

  return arr;
}

/**
 * Get the Levenshtein distance of two strings
 * @param  {String} str1 The first string
 * @param  {String} str2 The second string
 * @return {Number}      The Levenshtein distance of two input strings
 */
export default function LevenshteinDistance(str1, str2) {
  const dp = getEmptyArray(str1.length + 1, str2.length + 1);

  for (let i = 0; i < str1.length + 1; i++) {
    for (let j = 0; j < str2.length + 1; j++) {
      if (Math.min(i, j) === 0) {
        dp[i][j] = Math.max(i, j);
      } else {
        const add = str1[i - 1] !== str2[j - 1] ? 1 : 0;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + add);
      }
    }
  }

  return dp[str1.length][str2.length];
}
