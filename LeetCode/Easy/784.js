// 784. Letter Case Permutation

// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

// Input: S = "3z4"
// Output: ["3z4", "3Z4"]

// Input: S = "12345"
// Output: ["12345"]
// Note:

// S will be a string with length between 1 and 12.
// S will consist only of letters or digits.

const letterCasePermutationAux = (S, i, str, res) => {
  if (i >= S.length) {
    res.push(str);
    return;
  }
  // If S[i] is a letter
  if (Number.isNaN(parseInt(S[i], 10))) {
    letterCasePermutationAux(S, i + 1, str + S[i].toLowerCase(), res);
    letterCasePermutationAux(S, i + 1, str + S[i].toUpperCase(), res);
  } else {
    letterCasePermutationAux(S, i + 1, str + S[i], res);
  }
};

/**
 * @param {string} S
 * @return {string[]}
 */
export default function letterCasePermutation(S) {
  const res = [];
  letterCasePermutationAux(S, 0, '', res);
  return res;
}
