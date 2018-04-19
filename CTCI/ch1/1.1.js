/**
 * Check if a string has all unique characters
 *
 * If this needs to be done in place, use an in-place sorting algorithm
 * on the string and the check for each char if the next char is equal to
 * the current char. If it is, return false
 *
 * @flow
 */
export default function CheckHashAllUniqueChars(string: string): boolean {
  const set = new Set();

  for (const char of string) {
    if (!set.has(char)) {
      set.add(char);
    } else {
      return false;
    }
  }

  return true;
}
