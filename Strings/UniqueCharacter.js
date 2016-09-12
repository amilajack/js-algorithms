/**
 * Implement an algorithm to determine if a string has all unique characters
 * What if you can not use additional data structures?
 *
 * Solution: Use a hash map so that we can have constant time access when checking
 *           to see if a solution exists.
 *
 *           It's less optimal to use String.prototype.includes ('foo'.includes()).
 *           `includes()` iterates over each element, each means O(n). Using a
 *           hash map can get us to O(1) for lookup
 */
function UniqueCharacter(string) {
  const map = {};
  let allCharsUnique = true;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // Lookup is O(n)
    if (map[char]) {
      allCharsUnique = false;
      return true;
    }

    // Insertion is O(n)
    map[char] = char;
  }

  return allCharsUnique;
}

console.log(UniqueCharacter('aaaaaaaaaaaaaa') === true);
console.log(UniqueCharacter('aaaaaaaabaaaaa') === false);
