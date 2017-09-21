// @flow

/**
 * Given a string, write a function to check if it is a permutation of a
 * palindrome. A palindrome is a word or phrase that is the same forwards and
 * backwards. A permutation is a rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary words.
 */

/**
 *
 * O(N) time
 * O(N) space
 * @param {*} str the string to check
 * @return true if str is a permutaiton of a palindrome
 */
export default function palindromePermutation(str: string) {
  // create new string that ignores whitespace
  // for each character, use it as a key and icrment the value in a hash table
  // have a flag that allows only one character to appear once
  // check if all the values in the hash table === 2 or if at most one === 1
  const newStr = str.replace(/ /g, '').toLowerCase();
  const charCount = new Map();
  for (let i = 0; i < newStr.length; i++) {
    if (!charCount.get(newStr[i])) {
      charCount.set(newStr[i], 1);
    } else {
      charCount.set(newStr[i], charCount.get(newStr[i]) + 1);
    }
  }

  let flagCount = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (charCount.get(newStr[i]) === 1) {
      flagCount += 1;
    }
    if (flagCount === 2) {
      return false;
    }
  }
  return true;
}
