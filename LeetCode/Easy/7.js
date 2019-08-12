// 7. Reverse Integer

// Given a 32-bit signed integer, reverse digits of an integer.
// Assume we are dealing with an environment which could only store integers within the
// 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume
// that your function returns 0 when the reversed integer overflows.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

// Idea:
// x = -17
// x = -1 -> end = -7
// x = 0 -> end = -10

// [-7, -10, ...]

/**
 * @param {number} x
 * @return {number}
 */
export default function reverse(x) {
  let i = Math.floor(Math.log10(Math.abs(x)));
  let res = 0;
  while (x !== 0) {
    const end = x % 10;
    x = parseInt(x / 10, 10);
    res += end * 10 ** i;
    i--;
  }
  return Math.abs(res) > 2 ** 31 - 1 ? 0 : res;
}
