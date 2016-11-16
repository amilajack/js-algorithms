/**
 * A short example showing how to reverse a string
 * @flow
 */
import { expect } from 'chai'


function SlowReverseString(string: string): string {
  let reversedString = ''
  let index

  for (index = string.length - 1; index >= 0; index--) {
    reversedString += string[index]
  }

  return reversedString
}


// Assert SlowReverseString
test('ReverseString', () => {
  expect(SlowReverseString('some')).to.equal('emos')
})
