// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export default function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  const ans = [];
  let carry = 0;
  while (j >= 0 || i >= 0 || carry) {
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(a[i], 10);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(b[j], 10);
      j--;
    }
    carry = sum > 1 ? 1 : 0;
    ans.push(sum % 2);
  }
  return ans.reverse().join('');
}
