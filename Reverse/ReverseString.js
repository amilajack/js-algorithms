/**
 * A short example showing how to reverse a string
 */
import assert from 'assert';


function SlowReverseString(string) {
  let reversedString = '',
  let index;

  for (index = string.length - 1; index >= 0; index--) {
    reversedString += string[index];
  }

  return reversedString;
}


// Assert SlowReverseString
assert.equal(SlowReverseString('some'), 'emos');
