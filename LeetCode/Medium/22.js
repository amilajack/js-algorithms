/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesisAux = (list, str, open, closed, max) => {
  if (str.length === max * 2) {
    return list.push(str.join(''));
  }
  if (open < max) {
    generateParenthesisAux(list, [...str, '('], open + 1, closed, max);
  }
  if (closed < open) {
    generateParenthesisAux(list, [...str, ')'], open, closed + 1, max);
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
