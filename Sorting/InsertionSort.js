/**
 * InsertionSort is simple sorting algorithm. Is efficient when
 * sorting small data sets. Often used in conjunction with Bucket sort
 * More specifically, run time requires n checks + (# of inversions)
 *
 *
 * Notes:
 * - Stable
 * - In-place
 *
 * @complexity: O(n^2)
 * @flow
 */
export default function InsertionSort(items: Array<number>): Array<number> {
  const itemsCopy = [...items];
  let value; // the value currently being compared
  let i; // index of first element in unsorted section
  let j; // index going into sorted section

  for (i = 0; i < itemsCopy.length; i++) {
    value = itemsCopy[i];
    j = i - 1;
    while (j >= 0 && itemsCopy[j] > value) {
      itemsCopy[j + 1] = itemsCopy[j];
      j--;
    }
    itemsCopy[j + 1] = value;
  }

  return itemsCopy;
}
