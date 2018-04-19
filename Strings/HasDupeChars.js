/**
 * Implement an algorithm to determine if a string has only unique characters.
 * In other words, it cannot have duplicates. What if you can not use additional
 * data structures?
 *
 * Solution: Essentially, we have to check if a character is not repeated.
 *           We can use a hash map so that we can have constant time access when
 *           checking to see if a solution exists.
 *
 *           It's less optimal to use String.prototype.includes ('foo'.includes()).
 *           `includes()` iterates over each element, each means O(n). Using a
 *           hash map can get us to O(1) for lookup
 *
 * Complexity: O(n^2): In the worst-case senario, each element in the array
 *                     needs to be iterated over and every character in each
 *                     string will need to be iterated over. Each of those
 *                     operations is O(n)
 * @flow
 */
export default function HasDupeChars(string: string): boolean {
  const set = new Set(string);
  return set.size !== string.length;
}
