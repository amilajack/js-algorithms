// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can
// you climb to the top?
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
import { expect } from 'chai'


type num = number

export default function StairCaseCombinationSlow(stairs: num): num {
  if (stairs <= 0) return 0
  if (stairs === 1) return 1
  if (stairs === 2) return 2
  return (
    StairCaseCombinationSlow(stairs - 1) +
    StairCaseCombinationSlow(stairs - 2)
  )
}

// This method of solving the problem uses dynamic programming. Its
// recurses and then save the computation for later in case it is necessary
// again. This is called memoization
// @TODO
export function StairCaseCombinationDP(stairs: num): num {
  let comb = 0

  return (function recurse(steps: num, sum: num = 0): num | any {
    switch (steps) {
      case sum:
        comb += 1
        return comb
      default:
        recurse(steps, sum + 1)

        if (steps - sum > 1) {
          recurse(steps, sum + 2)
        }

        return comb
    }
  }(stairs))
}

expect(StairCaseCombinationSlow(4)).to.equal(5)
expect(StairCaseCombinationSlow(2)).to.equal(2)
