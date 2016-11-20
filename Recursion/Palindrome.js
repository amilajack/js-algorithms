/**
 * Here's how this works:
 *
 * Palindrome('radar')
 * Palindrome('ada')
 * Palindrome('d')
 *
 * @flow
 * @TODO
 */
import { expect } from 'chai'


export default function Palindrome(string: string): bool {
  // Base case
  if (string.length < 2) return true

  // Check outermost keys
  if (string[0] !== string[string.length - 1]) {
    return false
  }

  return Palindrome(string.slice(1, string.length - 1))
}

test('Palindrome()', () => {
  Palindrome('radar')
  expect(Palindrome('')).to.equal(true)
  expect(Palindrome('a')).to.equal(true)
  expect(Palindrome('aa')).to.equal(true)
  expect(Palindrome('radar')).to.equal(true)
})
