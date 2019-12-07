// @flow
import Flatten, { FlattenRecursive } from '../Recursion/Flatten';
import ArrayLength from '../Recursion/ArrayLength';
import DivideArray from '../Recursion/DivideArray';
import PalindromeRecursive, {
  PalindromeIterative
} from '../Recursion/Palindrome';
import StairCaseCombinationsDP, {
  StairCaseCombinationRecursive
} from '../Recursion/StairCaseCombinations';

describe('Recursion', () => {
  test('Flatten', () => {
    expect(
      Flatten([
        [1, 3, 4, 5],
        [13, 15, 41, 54]
      ])
    ).toEqual([13, 15, 41, 54, 1, 3, 4, 5]);

    expect(FlattenRecursive([1, [2]])).toEqual([1, 2]);
    expect(FlattenRecursive([1, [[[2]]]])).toEqual([1, 2]);
    expect(FlattenRecursive([1, [2, [[3, 4], 5], 6]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6
    ]);
  });
  test('StairCaseCombination', () => {
    expect(StairCaseCombinationRecursive(4)).toEqual(5);
    expect(StairCaseCombinationRecursive(2)).toEqual(2);
    expect(StairCaseCombinationsDP(4)).toEqual(5);
    expect(StairCaseCombinationsDP(2)).toEqual(2);
  });

  test('Palindrome()', () => {
    PalindromeRecursive('radar');
    expect(PalindromeRecursive('')).toEqual(true);
    expect(PalindromeRecursive('a')).toEqual(true);
    expect(PalindromeRecursive('aa')).toEqual(true);
    expect(PalindromeRecursive('ab')).toEqual(false);
    expect(PalindromeRecursive('radar')).toEqual(true);

    expect(PalindromeIterative('')).toEqual(true);
    expect(PalindromeIterative('a')).toEqual(true);
    expect(PalindromeIterative('aa')).toEqual(true);
    expect(PalindromeIterative('ab')).toEqual(false);
    expect(PalindromeIterative('radar')).toEqual(true);
    expect(PalindromeIterative('A man, a plan, a canal: Panama')).toEqual(true);
  });

  test('ArrayLength()', () => {
    expect(ArrayLength([1, 3, 4, 5])).toEqual(4);
  });

  test('DivideArray()', () => {
    expect(DivideArray([1, 2, 3, 4, 5])).toEqual([[5], [4], [3], [2], [1]]);
  });
});
