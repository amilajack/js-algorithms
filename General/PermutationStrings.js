/**
 * Given two strings, write a method to decide if one is a permutation of the
 * other.
 * @flow
 */

/**
 * Complexity: O(n)
 */
export default function PermutationString(
  first: string,
  second: string
): boolean {
  if (first.length !== second.length) return false;

  const _first: Map<string, number> = new Map();

  for (const char of first) {
    if (_first.has(char)) {
      const some = _first.get(char);
      _first.set(char, some + 1);
    } else {
      _first.set(char, 1);
    }
  }

  for (const _char of second) {
    if (_first.has(_char)) {
      const foo = _first.get(_char);
      if (foo) {
        _first.set(_char, foo - 1);
      }
    }
  }

  for (const val of _first.values()) {
    if (val !== 0) return false;
  }

  return true;
}

/**
 * Complexity: O(nlogn)
 */
export function PermutationStringInPlace(
  first: string,
  second: string
): boolean {
  if (first.length !== second.length) return false;

  const _first = first.split('').sort();
  const _second = second.split('').sort();

  for (let i = 0; i < _first.length; i++) {
    if (_first[i] !== _second[i]) return false;
  }

  return true;
}
