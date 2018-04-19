// @flow
import isBalanced from '../General/ParenthesesMatching';
import PermutationString, {
  PermutationStringInPlace
} from '../General/PermutationStrings';

describe('General', () => {
  test('PermutationString', () => {
    expect(PermutationStringInPlace('abc', 'ab')).toEqual(false);
    expect(PermutationString('abcdef', 'xyz')).toEqual(false);

    expect(PermutationStringInPlace('abc', 'ab')).toEqual(false);
    expect(PermutationString('abcdef', 'xyz')).toEqual(false);

    expect(PermutationStringInPlace('foo', 'off')).toEqual(false);
    expect(PermutationString('foo', 'off')).toEqual(false);
    expect(PermutationString('foo', 'offa')).toEqual(false);
  });

  test('isBalanced', () => {
    const testCases = [
      '12345',
      '(1 + 2)',
      '{1 + [2 * 3]}',
      '{1 + [2 * (3 / 4)]}'
    ];

    const failingTests = ['123{4{[[[]5', '(1 + 2)))))', '(1-3}', '(1-3}'];

    expect(testCases.map(isBalanced)).toEqual([true, true, true, true]);

    expect(failingTests.map(isBalanced)).toEqual([false, false, false, false]);
  });
});
