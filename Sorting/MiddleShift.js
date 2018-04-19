/**
 * Add a number to the middle of an array
 *
 * Solution: Find the index closest to the 'middle' of an array. Then add the
 *           elements that follow it to separate
 * @flow
 */

/**
 * Complexity: O((n/2)^2)
 */
export function SlowMiddleShift(string: string, char: string): string {
  const middleIndex = Math.floor(string.length / 2);
  let formatted = string.substring(0, middleIndex);

  // BAD
  // O((n/2)^2)
  formatted += char;

  for (let i = middleIndex; i < string.length; i++) {
    formatted += string[i];
  }

  return formatted;
}

/**
 * Complexity: O(n+1)
 */
export default function FastMiddleShift(string: string, char: string): string {
  const middleIndex = Math.floor(string.length / 2);
  return (
    string.substring(0, middleIndex) + char + string.substring(middleIndex)
  );
}
