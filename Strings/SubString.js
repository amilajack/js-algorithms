/**
 * Find the substring of a number given a start and end index. Note that a
 * substring is a part of a string.
 *
 * Complexity: O(n^2), where n is the length of the substring (Math.abs(start - end))
 */
import { expect } from 'chai'


function SubString(string, start = 0, end = string.length) {
  let substring = ''

  for (let i = start; i < end + 1; i++) {
    substring += string[i]
  }

  return substring
}

expect(SubString('some', 2, 3)).to.equal('me')
