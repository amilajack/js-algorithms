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

function SquareRoot(number: num): num {
  return Math.sqrt(number)
}

assert(25, SquareRoot(25 ** 2))
