/**
 * A smal example that genrates a random string of letters and numbers
 */

import randomNumber from './RandomNumber'

/**
 * Random string
 * @param  {number} randomStringLength
 * @return string
 */
function randomString(randomStringLength) {

  const
    dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  let
    generatedRandomString = '',
    index

  for (index = 0; index < randomStringLength; index++) {
    let randomDictionaryIndex = Math.floor(randomNumber(0, dictionary.length))
    generatedRandomString += dictionary[randomDictionaryIndex]
  }

  return generatedRandomString
}

export default randomString
