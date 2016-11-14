// Returning random numbers from Javascript
// Javascript's Math.random function only returns a random number from 0 to 1
// Here, we can write our own random functions to improve the random functionality
// @flow

import assert from 'assert'


type num = number

/**
 * Return a random number between a min and max
 */
export default function RandomBetween(min: num, max: num): number {
  return Math.random() * (max - min)
}

// Assert randomBetween
export function isBeween(number: num, min: num, max: num): boolean {
  return number > min && number < max
}

assert(isBeween(RandomBetween(1, 10), 1, 10))
