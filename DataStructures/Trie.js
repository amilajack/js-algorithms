export default function PrefixTrie(words: Array<string>) {
  const trie = new Map();
  for (const word of words) {
    let tmp = trie;
    for (const char of Array.from(word)) {
      if (!tmp.has(char)) {
        tmp.set(char, new Map());
      }
      tmp = tmp.get(char);
    }
    tmp.set('END', null);
  }
  return trie;
}
