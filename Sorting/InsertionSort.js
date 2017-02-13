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
import { expect } from 'chai';


export default function InsertionSort(items: Array<number>): Array<number> {
  const itemsCopy = [...items];
  let value;                      // the value currently being compared
  let i;                          // index of first element in unsorted section
  let j;                          // index going into sorted section

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

expect(InsertionSort([5, 2, 8, 21, 9, -1]))
  .to.eql([-1, 2, 5, 8, 9, 21]);
expect(InsertionSort([31, 2, 0, -12, -520, 7, 210, 21, 82, 16]))
  .to.eql([-520, -12, 0, 2, 7, 16, 21, 31, 82, 210]);
