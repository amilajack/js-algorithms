/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
export default function wordBreak(s, wordDict) {
  const dict = new Set(wordDict);
  const memo = new Array(s.length + 1).fill(false);
  memo[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (memo[j] && dict.has(s.substring(j, i))) {
        memo[i] = true;
        break;
      }
    }
  }
  return memo[s.length];
}
