/**
 * A palindrome is any string that can be reversed and still be the same.
 * An example of one is 'radar', since it is spelled the same even after
 * being reversed. One method to check if a
 *
 * Here's how this works recursively:
 *
 * Palindrome('radar')
 * true && Palindrome('ada')
 * true && true && Palindrome('d')
 * true && true && true && true
 *
 * @flow
 * @complexity: O(n)
 */
export default function PalindromeRecursive(string: string): bool {
  // Base case
  if (string.length < 2) return true;

  // Check outermost keys
  if (string[0] !== string[string.length - 1]) {
    return false;
  }

  return PalindromeRecursive(string.slice(1, string.length - 1));
}

export function PalindromeIterative(string: string): bool {
  const _string = string
    .toLowerCase()
    .replace(/ /g, '')
    .replace(/,/g, '')
    .replace(/'.'/g, '')
    .replace(/:/g, '')
    .split('');

  for (let i = 0; i < Math.floor(_string.length / 2); i++) {
    if (_string[_string.length - 1 - i] !== _string[i]) return false;
  }

  return true;
}
