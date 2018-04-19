/**
 * Find all the permutations of a string
 *
 * What is a permutation?
 *
 * [a, b, c]
 * [b, c, a] <- this is a valid permutation
 * [b, b, a] <- this is a permutation
 * [b, b, a] <- this is also a permutation. 'duplicates' are counted
 *
 * @flow
 */
import Factorial from '../Math/Factorial';

let permutations = 0;

/**
 * @complexity: O(n!), where n is the length of the string
 */
export default function StringPermutationsRecursive(string: string): number {
  if (string.length === 1) {
    permutations++;
  }

  const _string = string.split('');

  for (let i = 0; i < _string.length; i++) {
    StringPermutationsRecursive(
      _string.filter((e: any, _i: number): boolean => _i !== i).join('')
    );
  }

  return permutations;
}

/**
 * @complexity: O(n), where n is the length of the string
 */
export function StringPermutationsRecursiveFactorial(string: string): number {
  return Factorial(string.length);
}
