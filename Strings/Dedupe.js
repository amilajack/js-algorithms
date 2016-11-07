/**
 * Remove all the duplicates in a string
 *
 * Complexity: O(n^3)
 */
function Dedupe(string, concatenatedString = '') {
  if (string.length === 0) {
    return '';
  }

  const map = {};

  // Iteration is O(n)
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // Lookup is O(n)
    // Skip appending if already exists in hash map
    if (map[char]) {
      return Dedupe(string, concatenatedString);
    }

    // Insertion is O(n)
    // Append if does not already exist in hash map
    map[char] = char;

    return Dedupe(string, concatenatedString += char);
  }

  return allCharsUnique;
}

console.log(Dedupe('abababababab') === 'ab');
console.log(Dedupe('aabbc') === 'abc');
