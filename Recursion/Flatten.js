/**
 * Take a two dimentional array (array of arrays) and 'flatten' it. In other
 * words, this means to take multiple arrays and merge them together
 *
 * Javascript's Array.prototype.concat would make this easier but it creates a
 * new array every single time
 *
 * Complexity: O(n^2)
 * @flow
 */

/* eslint no-unused-expressions: 0 */

type num = number;

export default function Flatten(
  array: Array<Array<num>>,
  collector: num[] = []
): num[] {
  switch (array.length > 0) {
    case true: {
      const [first, ...rest] = array;
      return Flatten(rest, [...first, ...collector]);
    }
    default:
      return collector;
  }
}

export function FlattenRecursive(items: Array<any>): Array<any> {
  let concatedItems = [];

  for (let i = 0; i < items.length; i++) {
    Array.isArray(items[i])
      ? (concatedItems = concatedItems.concat(FlattenRecursive(items[i])))
      : concatedItems.push(items[i]);
  }

  return concatedItems;
}
