/**
 * Given a list of numbers and specific integer, check if the sum
 * of any two integers in the list add to equal the given number.
 *
 * Formally, in the given set of arbitray integers, do an two
 * integers m,n in the set exist such that m + n = k, where k is a
 * given integer
 *
 * @flow
 */
export default function CheckAddition(target: number, list: number[]): boolean {
  const map = new Map();

  for (let i = 0; i < list.length; i++) {
    if (map.has(list[i])) {
      const curr = map.get(list[i]);
      map.set(list[i], curr + 1);
    } else {
      map.set(list[i], 1);
    }
  }

  for (let i = 0; i < list.length; i++) {
    const res = target - list[i];
    if (map.has(res)) {
      if (res === list[i]) {
        return map.get(res) > 1;
      }
      return true;
    }
  }

  return false;
}
