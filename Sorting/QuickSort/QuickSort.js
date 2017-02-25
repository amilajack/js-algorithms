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
import { expect } from 'chai';


export default function QuickSort(items: Array<number>): Array<number> {
  const itemsCopy = [...items];
  QuickSortRecursive(itemsCopy, 0, itemsCopy.length - 1);
  return itemsCopy;
}

// Helper function that partitions the array into sub-sections to be sorted
function QuickSortRecursive(items: Array<number>, left: number, right: number) {
  if (left < right) {
    const pivot = RandomizedPartition(items, left, right);
    QuickSortRecursive(items, left, pivot - 1);
    QuickSortRecursive(items, pivot + 1, right);
  }
}

function RandomizedPartition(items: Array<number>, left: number, right: number): number {
  const i = getRandomInt(left, right);
  Swap(items, i, right);
  return Partition(items, left, right);
}

// Partitions array into two sections (one < pivot, one > pivot)
function Partition(items: Array<number>, left: number, right: number): number {
  const x = items[right]; // x is the value of our pivot
  let i = left - 1; // i is our "wall"

  for (let j = left; j < right; j++) {
    if (items[j] <= x) {
      i++;
      Swap(items, i, j);
    }
  }

  Swap(items, i + 1, right);

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

// Tests
expect(QuickSort([122, 3, 2, 5, 33, 22, 11]))
  .to.eql([2, 3, 5, 11, 22, 33, 122]);
expect(QuickSort([4, 9, 1, 34, 12, 6, 5, 18, 51, 21, -5, -3, 89, -2]))
  .to.eql([-5, -3, -2, 1, 4, 5, 6, 9, 12, 18, 21, 34, 51, 89]);
