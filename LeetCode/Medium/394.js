/**
 * @param {string} s
 * @return {string}
 */
export default function decodeString(s) {
  const stack = [['', 1]];
  let num = '';
  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(parseInt(s[i], 10))) {
      num += s[i];
    } else if (s[i] === '[') {
      stack.push(['', parseInt(num, 10)]);
      num = '';
    } else if (s[i] === ']') {
      const res = stack.pop();
      stack[stack.length - 1][0] += new Array(res[1] + 1).join(res[0]);
    } else {
      stack[stack.length - 1][0] += s[i];
    }
  }
  return stack[0][0];
}
