/**
 * A smal example that genrates a random string of letters and numbers
 * @flow
 */
import randomNumber from '../Math/RandomNumber';

/**
 * Generate a random string
 */
export default function RandomString(stringLength: number): string {
  const dictionary =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let generatedRandomString = '';
  let index;

  for (index = 0; index < stringLength; index++) {
    const randomDictionaryIndex = Math.floor(
      randomNumber(0, dictionary.length)
    );
    generatedRandomString += dictionary[randomDictionaryIndex];
  }

  return generatedRandomString;
}
