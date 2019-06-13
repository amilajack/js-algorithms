// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

const reverseStringAux = (s, n, m) => {
  if (m === n || s.length === 0 || n > m) return s;
  // swap first and last, in place
  const a = s[n];
  const b = s[m];
  s[n] = b;
  s[m] = a;
  reverseStringAux(s, n + 1, m - 1);
  return s;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export default function reverseString(s) {
  return reverseStringAux(s, 0, s.length - 1);
}
