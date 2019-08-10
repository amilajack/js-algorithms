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

export function hash() {
  let hashedValue = 0;
  let i;
  let chr;
  if (this.length === 0) return hashedValue;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hashedValue = (hashedValue << 5) - hashedValue + chr;
    hashedValue |= 0; // Convert to 32bit integer
  }
  return hashedValue;
}

export default function RabinKarp(m, n) {
  const indicies = [];
  const hashedValue = hash(n);
  for (let i = 0; i < m.length; i++) {
    const str = m.splice(i, i + n.length);
    if (hash(str) === hashedValue) {
      indicies.push(i);
    }
  }
  return indicies;
}
