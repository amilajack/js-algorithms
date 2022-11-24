/**
 * Recursive version of the bubble sort algorithm
 *
 * @complexity: O(n^2)
 * @flow
 */
export default function BubbleSort(arr) {
  return _bubblesort(arr, arr.length);
}
  
function _bubblesort(arr, stopIndex) {
  if (stopIndex === 1) {
    return arr;
  }
  for (let i = 0; i < stopIndex - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
  return _bubblesort(arr, stopIndex - 1);
}
