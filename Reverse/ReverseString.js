/**
 * A short example showing how to reverse a string
 */
const assert = require('assert')


function SlowReverseString(string) {

  let
    reversedString = '',
    index

  for (index = string.length - 1; index >= 0; index--) {
    reversedString += string[index]
  }

  return reversedString
}


// Assert SlowReverseString
assert.equal(SlowReverseString('some'), 'emos')
