/**
 * For each element, check if there are any other elements smaller than it.
 * If there are, swap those elements.
 *
 * @complexity: O(n^2)
 * @flow
 */
export default function SelectionSort(elements: number[]): number[] {
  const { length } = elements;

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
