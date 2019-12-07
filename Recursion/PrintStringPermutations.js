/**
 * Print all the permutations of a string
 *
 * @param chars  The array of chars are yet to be be permuted to the string
 * @param string The currently built string
 * @flow
 */
function printStrPerm(chars: Array<string>, string: string) {
  if (chars.length === 0) {
    return console.log(string);
  }

  for (let i = 0; i < chars.length; i++) {
    printStrPerm(
      chars.filter(e => e !== chars[i]),
      string + chars[i]
    );
  }
}

export default function PrintStringPermutations(string: string) {
  return printStrPerm(Array.from(string), '');
}
