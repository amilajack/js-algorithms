/**
 * A short example showing how to reverse a string
 */

import assert from 'assert'

function reverseString(string) {

  let
    reversedString = '',
    index

  for (index = string.length - 1; index >= 0; index--) {
    reversedString += string[index]
  }

  return reversedString
}


// Assert reverseString
assert.equal(reverseString('some'), 'emos')
