/**
 * QuickSort is an efficient sorting algorithm that utilizes the divide-and-conquer paradigm
 *
 * Notes:
 * - Algorithm derived via Introduction to Algorithm (Cormen et al)
 * - Has an optimal best and average case (O(nlgn)) but unlikely poor worst case (O(n^2))
 *   - Worst occurs when QuickSort produces a maximally unbalanced subproblem with n-1 elements
 *     and one with 0 elements, and happens through every iteration of QuickSort
 * - Not stable (Other implementations of QuickSort are)
 * - In-place (Other implementations of QuickSort aren't)
 * - This implementation uses randomly selected pivots for better performance
 *
 * @complexity: O(nlgn)
 * @flow
 */
export default function QuickSort(items: Array<number>): Array<number> {
  const itemsCopy = [...items];
  QuickSortRecursive(itemsCopy, 0, itemsCopy.length - 1);
  return itemsCopy;
}

function QuickSortRecursive(items: Array<number>, p: number, r: number) {
  if (p < r) {
    const q = RandomizedPartition(items, p, r);
    QuickSortRecursive(items, p, q - 1);
    QuickSortRecursive(items, q + 1, r);
  }
}

function RandomizedPartition(
  items: Array<number>,
  p: number,
  r: number
): number {
  const i = getRandomInt(p, r);
  Swap(items, i, r);
  return Partition(items, p, r);
}

function Partition(items: Array<number>, p: number, r: number): number {
  const x = items[r];
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if (items[j] <= x) {
      i++;
      Swap(items, i, j);
    }
  }

  Swap(items, i + 1, r);

  return i + 1;
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Swap(arr: Array<any>, x: any, y: any) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
