/**
 * A palindrome is any string that can be reversed and still be the same.
 * An example of one is 'radar', since it is spelled the same even after
 * being reversed. One method to check if a
 *
 * Here's how this works recursively:
 *
 * Palindrome('radar')
 * true && Palindrome('ada')
 * true && true && Palindrome('d')
 * true && true && true && true
 *
 * @flow
 * @complexity: O(n)
 */
import { expect } from 'chai'


function PalindromeRecursive(string: string): bool {
  // Base case
  if (string.length < 2) return true

  // Check outermost keys
  if (string[0] !== string[string.length - 1]) {
    return false
  }

  return PalindromeRecursive(string.slice(1, string.length - 1))
}

function PalindromeIterative(string: string): bool {
  const _string = string
    .toLowerCase()
    .replace(/ /g, '')
    .replace(/,/g, '')
    .replace(/'.'/g, '')
    .replace(/:/g, '')
    .split('')

  for (let i = 0; i < Math.floor(_string.length / 2); i++) {
    if (_string[_string.length - 1 - i] !== _string[i]) return false
  }

  return true
}

// test('Palindrome()', () => {
  PalindromeRecursive('radar')
  expect(PalindromeRecursive('')).to.equal(true)
  expect(PalindromeRecursive('a')).to.equal(true)
  expect(PalindromeRecursive('aa')).to.equal(true)
  expect(PalindromeRecursive('ab')).to.equal(false)
  expect(PalindromeRecursive('radar')).to.equal(true)

  expect(PalindromeIterative('')).to.equal(true)
  expect(PalindromeIterative('a')).to.equal(true)
  expect(PalindromeIterative('aa')).to.equal(true)
  expect(PalindromeIterative('ab')).to.equal(false)
  expect(PalindromeIterative('radar')).to.equal(true)
  expect(PalindromeIterative('A man, a plan, a canal: Panama')).to.equal(true)
// })
