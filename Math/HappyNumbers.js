/**
 * Happy numbers
 *
 * Find the sum of the products of a digits of a number
 * Ex. 7 -> (7 * 7)
 * 7 -> 49 -> ...
 *
 * 36 -> (3 * 3) + (6 * 6)
 * 18 -> (1 * 1) + (8 * 8)
 *
 * "Happy" numbers are numbers that will have a number whose pattern include
 * Ex. 7 -> 49 -> 97 -> 130 -> 10 -> 1
 *
 *
 * "Unhappy" numbers will never include 1 in the sequence
 * Ex. 2 -> 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4
 *
 * Question: Determine if a number is "happy" or not
 */

import assert from 'assert'

let HappyNumberChecker = function(number) {

  this.numbers = []
  number = calc(number)

  while ( ! this.exists(number)) {
    calc(number)
    this.numbers.push()
  }
}

function calc(number) {

  let
    index,
    sum = 0

  for (index = 0; index < number.length; index++) {

    let int = parseInt(number[index])
    let result = int * int

    sum += result
  }

  return sum
}

/**
 * @param {number} number
 */
HappyNumberChecker.prototype.exists = function(number) {
  return this.numbers.includes(number)
}

// Assert calc
assert(calc('36'), 45)
