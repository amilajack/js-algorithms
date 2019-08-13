// 1087. Brace Expansion

// A string S represents a list of words.

// Each letter in the word has 1 or more options.  If there is one option, the letter is represented as is.  If there is more than one option, then curly braces delimit the options.  For example, "{a,b,c}" represents options ["a", "b", "c"].

// For example, "{a,b,c}d{e,f}" represents the list ["ade", "adf", "bde", "bdf", "cde", "cdf"].

// Return all words that can be formed in this manner, in lexicographical order.

// Example 1:

// Input: "{a,b}c{d,e}f"
// Output: ["acdf","acef","bcdf","bcef"]
// Example 2:

// Input: "abcd"
// Output: ["abcd"]

/**
 * @param {string} S
 * @return {string[]}
 */
function expandHelper(str, curr, i, res) {
  if (i >= str.length) {
    res.push(curr);
    return;
  }
  if (str[i] === '{') {
    let j = i;
    while (str[j] !== '}') {
      j++;
    }
    for (let k = i + 1; k < j; k += 2) {
      if (str[k] === ',') continue;
      expandHelper(str, curr + str[k], j + 1, res);
    }
  } else {
    expandHelper(str, curr + str[i], i + 1, res);
  }
}

/**
 * @param {string} S
 * @return {string[]}
 */
export default function expand(S) {
  const res = [];
  expandHelper(S, '', 0, res);
  return res.sort();
}
