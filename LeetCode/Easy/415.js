// 415. Add Strings

// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
export default function addStrings(num1, num2) {
  let carry = false;
  const str = [];
  for (let i = 0; i < Math.max(num1.length, num2.length) || carry; i++) {
    const a = i < num1.length ? num1[num1.length - 1 - i] : 0;
    const b = i < num2.length ? num2[num2.length - 1 - i] : 0;
    let sum = parseInt(a, 10) + parseInt(b, 10) + (carry === true ? 1 : 0);
    carry = sum > 9;
    sum %= 10;
    str.push(sum);
  }
  return str.reverse().join('');
}
