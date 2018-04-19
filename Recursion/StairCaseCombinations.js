// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can
// you climb to the top?
//
// Here's the recursion tree:
//
//                  4
//                /   \
//               1     2
//             / \    / \
//            1  2   1   2
//          / \  |   |
//         1  2  1   1
//        /
//       1
//
// @flow
type num = number;

// Use recursion to find number of steps
// @complexity: O(2^n)
export function StairCaseCombinationRecursive(stairs: num): num {
  if (stairs <= 0) return 0;
  if (stairs === 1) return 1;
  if (stairs === 2) return 2;
  return (
    StairCaseCombinationRecursive(stairs - 1) +
    StairCaseCombinationRecursive(stairs - 2)
  );
}

// This method of solving the problem uses dynamic programming. Its
// recurses and then save the computation for later in case it is necessary
// again. This is called memoization
//
// climbStairs(n)     = climbStairs(n - 1) + climbStairs(n - 2)
// climbStairs(n - 1) = climbStairs(n - 2) + climbStairs(n - 3)
// climbStairs(n - 2) = climbStairs(n - 3) + climbStairs(n - 4)
//
// @complexity: O(2^(n+1)
const dict: Map<num, num> = new Map();

export default function StairCaseCombinationDP(stairs: num): num {
  if (stairs <= 0) return 0;
  if (stairs === 1) return 1;
  if (stairs === 2) return 2;

  if (dict.has(stairs)) return dict.get(stairs);

  const res =
    StairCaseCombinationDP(stairs - 1) + StairCaseCombinationDP(stairs - 2);

  dict.set(stairs, res);

  return res;
}
