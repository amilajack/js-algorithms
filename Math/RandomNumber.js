// Returning random numbers from Javascript
// Javascript's Math.random function only returns a random number from 0 to 1
// Here, we can write our own random functions to improve the random functionality

import assert from 'assert'

/**
 * Return a random number between a min and max
 * @param  {number}  min
 * @param  {number}  max
 * @return {integer}
 */
export default function RandomBetween(min: number, max: number): boolean {
  return Math.random() * (max - min)
}

// Assert randomBetween
export function isBeween(number: number, min: number, max: number): boolean {
  return number > min && number < max
}

assert.isBeween(Math.randomBetween(1, 10), 1, 10)
