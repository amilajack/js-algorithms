/**
 * For each element, comparing with adjacent element
 * If it is bigger, swap.
 *
 * @complexity: O(n^2)
 * @flow
 */
export default function BubbleSort(numberArray: number[]): number[] {
  let { length } = numberArray;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < length - 1; i++) {
      if (numberArray[i] > numberArray[i + 1]) {
        const temp = numberArray[i];
        numberArray[i] = numberArray[i + 1];
        numberArray[i + 1] = temp;
        swapped = true;
      }
    }
    // after each round of inside loop, the largest element will fall to the bottom of the array.
    length -= 1;
  } while (swapped);
  return numberArray;
}
