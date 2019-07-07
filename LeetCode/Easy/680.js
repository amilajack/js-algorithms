// 680. Valid Palindrome II

// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:

// Input: "aba"
// Output: True
// Example 2:

// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:

// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

/**
 * @param {string} s
 * @return {boolean}
 */
export default function validPalindrome(s) {
  let invalid = false;
  let left = 0;
  let right = 0;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (i + left > s.length - 1 - i - right) break;
    if (s[i + left] === s[s.length - 1 - i - right]) {
      continue;
    } else if (!invalid) {
      invalid = false;
      if (s[i + 1] === s[s.length - 1 - i]) {
        left++;
      } else if (s[i] === s[s.length - 2 - i]) {
        right++;
      } else {
        return false;
      }
      invalid = false;
    } else {
      return false;
    }
  }
  return left + right < 2;
}
