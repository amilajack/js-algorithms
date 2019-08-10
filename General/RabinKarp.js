// Find all the indicies at which two strings match

// Examples:
//
// n = "aaabcdddbbddddabcdefghi"
// m = "abc"
// [2]
//
// n = "ababa"
// m = "aba"
// [0, 2]

function hashFn() {
  let hash = 0;
  let i;
  let chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export default function RabinKarp(m, n) {
  const indicies = [];
  const hash = hashFn(n);
  for (let i = 0; i < m.length; i++) {
    const str = m.splice(i, i + n.length);
    if (hashFn(str) === hash) {
      indicies.push(i);
    }
  }
  return indicies;
}
