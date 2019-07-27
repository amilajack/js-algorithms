// Returning random numbers from Javascript
// Javascript's Math.random function only returns a random number from 0 to 1
// Here, we can write our own random functions to improve the random functionality
// @flow

type num = number;

/**
 * Return a random number between a min and max
 */
export default function RandomBetween(min: num, max: num): num {
  return Math.random() * (max - min) + min;
}

// Assert randomBetween
export function isBeween(number: num, min: num, max: num): boolean {
  return number > min && number < max;
}
