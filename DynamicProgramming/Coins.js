/**
 * You have n dollars. How many distinguishable ways can you represent that value with
 * 1, 5, 10, and 25 dollar bills?
 *
 * For example, when n is 6, [[1, 5], [5, 1]] are possible solutions
 */

const map = new Map();

export default function Coins(n: number) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (map.has(n)) return map.get(n);
  const combinations =
    Coins(n - 1) + Coins(n - 5) + Coins(n - 10) + Coins(n - 25);
  map.set(n, combinations);
  return combinations;
}
