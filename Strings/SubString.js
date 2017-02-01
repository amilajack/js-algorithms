/**
 * Find the substring of a number given a start and end index. Note that a
 * substring is a part of a string.
 *
 * @complexity: O(n^2), where n is the length of the substring
 *
 * @flow
 */
import { expect } from 'chai';


type str = string;
type num = number;

function SubString(string: str, start: num = 0, end: num = string.length): str {
  let substring = '';

  for (let i = start; i < end + 1; i++) {
    substring += string[i];
  }

  return substring;
}

test('SubString()', () => {
  expect(SubString('some', 2, 3)).to.equal('me');
});
