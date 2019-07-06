// Given a string S, and an integer K, rearrange the string such that
// similar characters are at least K distance apart.

// Example:

// S = AAABBBCC, K = 3
// Result : ABCABCABC (all 'A's are 3 distance apart, similarly with
// B's and C's)

// S = AAABC, K=2 : Not possible. (EDIT : k=3 is not possible).

// S = AAADBBCC, K = 2:
// Result: ABCABCDA

function PrintKDistance(string) {
  const chars = Array.from(string);
  const map = new Map();

  for (const char of chars) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  let str = '';

  const itr = 1000;
  let i = 0;

  while (map.size > 0) {
    for (const key of map.keys()) {
      str += key;
      // Decrement key
      map.set(key, map.get(key) - 1);
      // If key = 0, remove
      if (map.get(key) === 0) {
        map.delete(key);
      }
    }
    if (i > itr) {
      break;
    }
    i++;
  }

  return str;
}

PrintKDistance('AAABBBCC');
