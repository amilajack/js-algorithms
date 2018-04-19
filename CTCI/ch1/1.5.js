// @flow
export default function OneAway(str1: string, str2: string): boolean {
  const set1 = new Set(str1);
  const set2 = new Set(str2);
  const diffs = new Array(2);

  for (const char of set1) {
    if (!set2.has(char)) {
      diffs.push(false);
    }
    if (diffs.length >= 2) {
      return false;
    }
  }

  return true;
}
