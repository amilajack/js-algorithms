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
export default function CheckAddition(target: number, list: number[]): bool {
  const set = new Set(list);

  return list.some((n: number): bool => {
    const m = target - n;
    return set.has(m) && m !== n;
  });
}
