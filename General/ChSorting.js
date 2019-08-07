// Implement a method that sort words, but instead of using the normal
// alphabet a, b, c, ..., x, y, z, we have ch that goes between h and i
// in the sort order. So the alphabet becomes a, b, ... h, ch, i, ... x, y, z.

// Observations:
// will need for loop to check 'ch'
// compare words character by character
//
// Three cases:
// only a index is 'ch'
// only b index is 'ch'
// both a and b indicies are 'ch'
// neither are 'ch'

function isCh(word, i) {
  return i + 1 < word.length && word[i] === 'c' && word[i + 1] === 'h';
}

function compareTwoWords(a, b) {
  for (let i = 0, j = 0; i < a.length && j < b.length; i++, j++) {
    const aIsCh = isCh(a, i);
    const bIsCh = isCh(b, j);
    if (aIsCh || bIsCh) {
      if (aIsCh && bIsCh) {
        i++;
        j++;
        continue;
      }
      if (aIsCh) return b[j] <= 'h' ? 1 : -1;
      return a[i] <= 'h' ? -1 : 1;
    }
    if (a[i] === b[i]) {
      continue;
    }
    return a[i] < b[j] ? 1 : -1;
  }
  return 0;
}

export default function sortWords(words) {
  return words.sort(compareTwoWords);
}

// Test:
// console.log(sortWords(['indigo', 'charisma', 'hotel']));
