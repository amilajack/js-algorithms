/**
 * Implement an algorithm to determine if a string has all unique characters
 * What if you can not use additional data structures?
 *
 * Solution: Essentially, we have to check if a character is not repeated.
 *           We can use a hash map so that we can have constant time access when
 *           checking to see if a solution exists.
 *
 *           It's less optimal to use String.prototype.includes ('foo'.includes()).
 *           `includes()` iterates over each element, each means O(n). Using a
 *           hash map can get us to O(1) for lookup
 */
function UniqueCharacter(string) {
  const map = {};
  let stringHasUniqueChar = false;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // If map has no elements, add initial
    // Base case
    if (i === 0) {
      // Insertion is O(n)
      map[char] = char;
    }
    else {
      // Lookup is O(n)
      if (map[char] !== char) {
        stringHasUniqueChar = true;
        return true;
      }
    }
  }

  return stringHasUniqueChar;
}

console.log(UniqueCharacter('aaaaaaaaaaaaaa') === false);
console.log(UniqueCharacter('aaaaaaaabaaaaa') === true);
