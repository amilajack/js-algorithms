// @flow
import CountingSort from '../Sorting/CountingSort';
import InsertionSort from '../Sorting/InsertionSort';
import MergeSortRecursive from '../Sorting/MergeSortRecursive';
import FastMiddleShift, { SlowMiddleShift } from '../Sorting/MiddleShift';
import QuickSort from '../Sorting/QuickSort';
import HeapSort from '../Sorting/HeapSort';
import SelectionSort from '../Sorting/SelectionSort';
import BubbleSort from '../Sorting/BubbleSort';

describe('Sorting()', () => {
  test('CountingSort()', () => {
    expect(CountingSort([5, 2, 8, 9])).toEqual([2, 5, 8, 9]);
    expect(CountingSort([])).toEqual([]);
    expect(CountingSort([1])).toEqual([1]);
    expect(CountingSort([4, -2])).toEqual([-2, 4]);
  });

  test('InsertionSort()', () => {
    expect(InsertionSort([5, 2, 8, 9])).toEqual([2, 5, 8, 9]);
    expect(InsertionSort([])).toEqual([]);
    expect(InsertionSort([1])).toEqual([1]);
    expect(InsertionSort([4, -2])).toEqual([-2, 4]);
  });

  it.skip('MergeSortRecursive()', () => {
    expect(MergeSortRecursive([5, 2, 8, 9])).toEqual([2, 5, 8, 9]);
    expect(MergeSortRecursive([])).toEqual([]);
    expect(MergeSortRecursive([1])).toEqual([1]);
    expect(MergeSortRecursive([4, -2])).toEqual([-2, 4]);
    expect(MergeSortRecursive([])).toEqual([]);
    expect(MergeSortRecursive([1, 3, 2, 10, 7, 5, 4])).toEqual([
      1,
      2,
      3,
      4,
      5,
      7,
      10
    ]);
  });

  test('FastMiddleShift', () => {
    expect(SlowMiddleShift('some', 'e')).toEqual('soeme');
    expect(FastMiddleShift('some', 'e')).toEqual('soeme');
  });

  test('QuickSort()', () => {
    expect(QuickSort([122, 3, 2, 5, 33, 22, 11])).toEqual([
      2,
      3,
      5,
      11,
      22,
      33,
      122
    ]);
    expect(
      QuickSort([4, 9, 1, 34, 12, 6, 5, 18, 51, 21, -5, -3, 89, -2])
    ).toEqual([-5, -3, -2, 1, 4, 5, 6, 9, 12, 18, 21, 34, 51, 89]);
  });

  test('SelectionSort()', () => {
    expect(SelectionSort([122, 3, 2, 5, 33, 22, 11])).toEqual([
      2,
      3,
      5,
      11,
      22,
      33,
      122
    ]);
  });

  test.skip('HeapSort()', () => {
    expect(HeapSort([5, 2, 8, 9])).toEqual([2, 5, 8, 9]);
    expect(HeapSort([])).toEqual([]);
    expect(HeapSort([1])).toEqual([1]);
    expect(HeapSort([4, -2])).toEqual([-2, 4]);
  });

  test('BubbleSort()', () => {
    expect(BubbleSort([1, 4.5, 6, 9, 7, 12, 32, 24])).toEqual([
      1,
      4.5,
      6,
      7,
      9,
      12,
      24,
      32
    ]);
    expect(BubbleSort([])).toEqual([]);
    expect(BubbleSort([2, -4])).toEqual([-4, 2]);
  });
});
