// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const generateParenthesisAux = (list, str, open, closed, max) => {
  if (str.length === max * 2) {
    return list.push(str.join(''));
  }
  if (open < max) {
    str.push('(');
    generateParenthesisAux(list, str, open + 1, closed, max);
    str.pop();
  }
  if (closed < open) {
    str.push(')');
    generateParenthesisAux(list, str, open, closed + 1, max);
    str.pop();
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
export default function generateParenthesis(n) {
  const list = [];
  const str = [];
  generateParenthesisAux(list, str, 0, 0, n);
  return list;
}
