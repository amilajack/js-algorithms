/**
 * A short example showing how to reverse a string
 * @flow
 */
import { expect } from 'chai'


/**
 * Create a new string and append
 * @complexity O(n)
 */
function ReverseStringSlow(string: string): string {
  let reversedString = ''
  let index

  for (index = string.length - 1; index >= 0; index--) {
    reversedString += string[index]
  }

  return reversedString
}

/**
 * JS disallows string mutation so we're actually a bit slower.
 *
 * @complexity: O(n)
 *
 * 'some' -> 'eoms' -> 'emos'
 */
function ReverseStringInplace(string: string): string {
  const _string = string.split('')

  for (let i = 0; i < Math.floor(_string.length / 2); i++) {
    const first = _string[i]
    const second = _string[_string.length - 1 - i]
    _string[i] = second
    _string[_string.length - 1 - i] = first
  }

  return _string.join('')
}

// Assert ReverseStringSlow
test('ReverseString', () => {
  expect(ReverseStringSlow('some')).to.equal('emos')
  expect(ReverseStringInplace('some')).to.equal('emos')
})
