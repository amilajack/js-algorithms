/**
 * Remove all the duplicates in a string
 *
 * Complexity: O(n^3)
 * @flow
 */
import { expect } from 'chai'


function Dedupe(string: string, concatenatedString: string = ''): string {
  if (string.length === 0) {
    return ''
  }

  const map = {}

  // Iteration is O(n)
  for (let i = 0; i < string.length; i++) {
    const char = string[i]

    // Lookup is O(n)
    // Skip appending if already exists in hash map
    if (map[char]) {
      return Dedupe(string, concatenatedString)
    }

    // Insertion is O(n)
    // Append if does not already exist in hash map
    map[char] = char

    return Dedupe(string, concatenatedString += char)
  }

  return allCharsUnique
}

expect(Dedupe('abababababab')).to.equal('ab')
expect(Dedupe('aabbc')).to.equal('abc')
