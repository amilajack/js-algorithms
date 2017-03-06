/**
 * Assumes each of the n input elements is an integer in the range 0 --> k,
 * for some integer k. If k = O(n), then CountingSort runs in ϴ(n) time
 *
 * Notes:
 * - Requires no user input of min or max
 * - Supports negative numbers
 *
 * @complexity: O(k) where k is the range
 * @flow
 */
export default function CountingSort(elements: number[]): number[] {
  let z = 0;
  let max = elements[0];
  let min = elements[0];
  for (let i = 1; i < elements.length; i++) {
    max = Math.max(max, elements[i]);
    min = Math.min(min, elements[i]);
  }
  const range = max - min;

  const finalArr = new Array(elements.length).fill(0);
  // Below is where algorithm may be inefficient (when range is too large)
  const countArr = new Array(range + 1 || 0).fill(0);

  for (let i = 0; i < elements.length; i++) {
    countArr[elements[i] - min]++;
  }

  for (let i = 0; i <= range; i++) {
    while (countArr[i]-- > 0) {
      finalArr[z++] = i + min;
    }
  }

  return finalArr;
}
