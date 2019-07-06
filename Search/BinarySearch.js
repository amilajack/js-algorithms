// @flow
type num = number;

export default function BinarySearchRecursive(items: num[], element: num): num {
  const middleIndex = Math.floor(items.length / 2);

  // Base Case
  if (items.length === 1) return items[0];

  if (items[middleIndex] <= element) {
    return BinarySearchRecursive(
      items.splice(middleIndex, items.length - 1),
      element
    );
  }

  return BinarySearchRecursive(items.splice(0, middleIndex), element);
}

export function BinarySearchIterative(items: num[], element: num): num {
  let low = 0;
  let high = items.length - 1;

  while (low < high) {
    const middle = Math.floor((high + low) / 2);
    const middleElement = items[middle];
    // Check middle element is equal to the element we are looking for. If it is,
    // return it
    if (middleElement === element) return middle;

    if (middleElement > element) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  if (items[low] === element) return low;

  return -1;
}
