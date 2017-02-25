/**
 * For each element, check if there are any other elements smaller than it.
 * If there are, swap those elements.
 *
 * @complexity: O(n^2)
 * @flow
 */
import { expect } from 'chai';


function SelectionSort(elements: number[]): number[] {
  const length = elements.length;

  for (let i = 0; i < length; i++) {
    let lowestIndex = i;

    for (let k = i + 1; k < length; k++) {
      if (elements[k] < elements[lowestIndex]) {
        lowestIndex = k;
      }
    }

    if (lowestIndex !== i) {
      swap(elements, i, lowestIndex);
    }
  }

  return elements;
}

function swap(items: number[], firstIndex: number, secondIndex: number) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

test('SelectionSort()', () => {
  expect(SelectionSort([122, 3, 2, 5, 33, 22, 11])).to.eql([2, 3, 5, 11, 22, 33, 122]);
});
