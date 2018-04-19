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
 * 'Happy' numbers are numbers that will have a number whose pattern include
 * Ex. 7 -> 49 -> 97 -> 130 -> 10 -> 1
 *
 *
 * 'Unhappy' numbers will never include 1 in the sequence
 * Ex. 2 -> 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4
 *
 * Question: Determine if a number is 'happy' or not
 *
 * @flow
 */

/**
 * Calculate if a number is happy or unhappy
 */
export default function HappyNumbers(number: number): boolean {
  const numbers = new Set();
  let currentNumber = calc(number);
  let infiniteLoopPreventionLimit = 0;

  while (!numbers.has(1) && infiniteLoopPreventionLimit < 1000) {
    currentNumber = calc(currentNumber);

    if (numbers.has(currentNumber)) {
      return false;
    }

    numbers.add(currentNumber);
    infiniteLoopPreventionLimit++;

    if (currentNumber === 1) {
      return true;
    }
  }

  return false;
}

export function calc(number: number): number {
  const castedNumber = number.toString();

  let index;
  let sum = 0;

  for (index = 0; index < castedNumber.length; index++) {
    const int = parseInt(castedNumber[index], 10);
    const result = int * int;
    sum += result;
  }

  return sum;
}
