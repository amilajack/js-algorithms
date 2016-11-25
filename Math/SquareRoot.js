// Find the square root of a given number, without using the Math.sqrt function
//
// Hmm.. if I divide the number by two and round it, will it always be less
// than than the square root?
//
// In the case that the number is less than 4, this is not true
// ex. √16 < 8^2 (64)
// ex. √4 = 2^2
// ex. √3 > 1.5^2
// ex. √2 > 1^2
// ex. √1 > 0.5^2 (1)
// ex. √0.5 < 0.25^2 (0.625)
//
// So if half the number is greater than or equal to four, we know that the
// root is less than half of the number
//
// An efficient way of doing this is using a binary search tree.
//
// @flow
import assert from 'assert'


type num = number

const tries: num[] = []

function SquareRootRecursive(number: num, increm: num = number): num {
  if (number <= 1) return 1
  if (number <= 4) return 4

  if (
    Math.abs(Math.abs(increm) - Math.abs(number)) < 2
  ) return increm

  if (increm ** 2 > number) {
    tries.push(increm / 2)
    return SquareRootRecursive(number, increm / 2)
  }

  const who =
    (tries[tries.length - 1] + tries[tries.length - 2]) / 2

  return SquareRootRecursive(number, who)
}

// @TODO: Taylor Series Method
// @TODO: Newtonian Method Method
// @TODO: Babylonian Method Method

console.log(SquareRootRecursive(25))
// assert(25, SquareRootRecursive(25 ** 2))
