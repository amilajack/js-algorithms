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

export default function StairCaseCombinations(stairs: number): number {
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

expect(StairCaseCombinations(4)).to.equal(5)
expect(StairCaseCombinations(2)).to.equal(2)
