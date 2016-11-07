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
 */
function UniqueCharacters(string) {
  const map = {};
  let stringHasUniqueChar = true;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // If map has no elements, add initial
    // Base case
    if (i === 0) {
      // Insertion is O(n)
      map[char] = char;
    } else {
      // Lookup is O(n)
      if (map[char] === char) {
        stringHasUniqueChar = false;
        return false;
      }

      // Insertion is O(n)
      map[char] = char;
    }
  }

  return stringHasUniqueChar;
}

console.log(UniqueCharacters('aaaaaaaaaaaaaa') === false);
console.log(UniqueCharacters('aaaaaaaabaaaaa') === false);
console.log(UniqueCharacters('abc') === true);
console.log(UniqueCharacters('def') === true);
