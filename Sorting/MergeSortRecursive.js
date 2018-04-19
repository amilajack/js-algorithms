/**
 * MergeSort is an efficient algorithm that utilizes the divide-and-conquer paradigm
 *
 * Notes:
 * - Has best, average, and worst case of O(nlgn)
 * - Stable
 * - Not in-place. Requires O(n) space since each recursive call on MergeSort
 *   creates temporary arrays to store values
 *
 * @complexity: O(nlgn)
 * @flow
 */
export default function MergeSortRecursive(items: number[]): number[] {
  return _divide(items);
}

const _items: Array<Array<number>> = [];

function _divide(array: Array<number>): any {
  switch (array.length) {
    case 1:
      _items.push(array);
      return _items;
    default: {
      const middle = Math.floor(array.length / 2);
      const first = array.splice(middle);
      return _merge(_divide(first), _divide(array));
    }
  }
}

// The 'target' array is the array that we'll merge into. This array will be
// shorter in length so that we don't access an array index that's out of bounds
function _merge(first: Array<number>, second: Array<number>): Array<number> {
  const merged = [];
  const [target, source] =
    first.length > second.length ? [first, second] : [second, first];

  for (let i = 0; i < target.length && i < source.length; i++) {
    if (target[i] < source[i]) {
      merged.push(target[i]);
      merged.push(source[i]);
    } else {
      merged.push(source[i]);
      merged.push(target[i]);
    }
  }

  if (merged.length < target.length + source.length) {
    const diff = target.length - source.length;
    for (let i = target.length - diff; i < target.length; i++) {
      merged.push(target[i]);
    }
  }

  return merged;
}
