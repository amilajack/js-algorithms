/**
 * Given an encoded string, return it's decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets
 * is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid; No extra white spaces, square
 * brackets are well-formed, etc.
 * Furthermore, you may assume that the original data does not contain any digits and
 * that digits are only for those repeat numbers, k. For example, there won't be input
 * like 3a or 2[4].
 *
 * Examples:
 * s = "3[a]2[bc]", return "aaabcbc".
 * s = "3[a2[c]]", return "accaccacc".
 * s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 *
 * Approach:
 * We see that brackets can be nested, so from this, we can deduce that the algorithm can probably
 * be solved recursively
 *
 * We need to expand the mostly deeply nested, or innermost, strings first. Maybe we can add them
 * to a stack. The top-most elements would be the innermost strings:
 *
 * Example: "3[a2[c]]"
 *
 *   "3[a2[c]]"
 *    "a2[c]"
 *     "2[c]"
 *      "c"
 *     "cc"
 *     "acc"
 *   "accaccacc"
 *
 * @flow
 */
function joinNTimes(string: string, n: number): string {
  // console.log(string);
  return (new Array(n + 1)).join(string);
}

// "3[a2[c2[c2[c]]]]"

// "3[a2[c]]"

export default function DecodeString(string: string, continuingString: string = ''): string {
  const chars = Array.from(string);

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (!Number.isNaN(parseInt(char))) {
      // console.log(continuingString);
      continuingString += joinNTimes(
        DecodeString(chars.slice(i + 2, chars.length - 1)),
        parseInt(char)
      );
    }

    if (char === ']') {
      return continuingString;
    }

    if (char !== '[' && char !== ']') {
      continuingString += char;
    }
  }

  return continuingString;
}

console.log(DecodeString('3[a]2[bc]'));
// console.log(DecodeString('3[a2[c]]'));
