// Returning random numbers from Javascript
// Javascript's Math.random function only returns a random number from 0 to 1
// Here, we can write our own random functions to improve the random functionality

import assert from 'assert'

/**
 * Return a random number between a min and max
 * @param  {number} min
 * @param  {number} max
 * @return {integer}
 */
Math.randomBetween = function(min, max) {
  return Math.random() * (max - min)
}

// Assertions
assert.isBeween = function(number, min, max) {
  return number > min && number < max
}

assert.isBeween(Math.randomBetween(1, 10), 1, 10)
