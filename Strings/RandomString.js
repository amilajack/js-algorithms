/**
 * A smal example that genrates a random string of letters and numbers
 * @flow
 */

import { expect } from 'chai'
import randomNumber from '../Math/RandomNumber'


/**
 * Generate a random string
 */
export default function RandomString(randomStringLength: number): string {
  const dictionary =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  let generatedRandomString = ''
  let index

  for (index = 0; index < randomStringLength; index++) {
    const randomDictionaryIndex = Math.floor(randomNumber(0, dictionary.length))
    generatedRandomString += dictionary[randomDictionaryIndex]
  }

  return generatedRandomString
}

test('RandomString', () => {
  expect(RandomString(10)).to.not.equal(RandomString(10))
})
