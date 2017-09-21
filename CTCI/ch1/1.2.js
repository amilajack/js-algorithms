// @flow

/**
 * Check Permutation - Given two strings, write a method to decide if one is
 *  a permutation of the other.
 */

/**
 *
 * O(NlgN) time
 * O(N) space
 * @param {*} str1 first string to check
 * @param {*} str2 second string to check
 * @return true if one string is a permutaiton of the other
 */
export function checkPermutationSlow(str1: string, str2: string) {
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

/**
 * O(N) time
 * O(N) space
 * @param {*} str1 first string to check
 * @param {*} str2 second string to check
 * @return true if one string is a permutaiton of the other
 */
export default function checkPermutationFast(str1: string, str2: string) {
  const charCount1 = new Map();
  const charCount2 = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (!charCount1.get(str1[i])) {
      charCount1.set(str1[i], 1);
    } else {
      charCount1.set(str1[i], charCount1.get(str1[i]) + 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!charCount2.get(str2[i])) {
      charCount2.set(str2[i], 1);
    } else {
      charCount2.set(str2[i], charCount2.get(str2[i]) + 1);
    }
  }

  for (let i = 0; i < str1.length; i++) {
    if (charCount1.get(str1[i]) !== charCount2.get(str1[i])) {
      return false;
    }
  }
  return true;
}
