/**
 * Find all the prime numbers of a certain number. This solution is based on the
 * Sieve of Eratosthenes method
 *
 * For each int 'a' until the given limit, check if each following int 'b' is divisible
 * by 'a'
 *
 * @complexity: O(n(logn))
 * @flow
 */
export default function PrimeNumberGenerator(limit: number = 100): number[] {
  const primeNumbers = [];

  for (let i = 1; i <= limit; i++) {
    primeNumbers.push(i);
  }

  for (let i = 0; i < primeNumbers.length; i++) {
    for (let d = 0; d < primeNumbers.length; d++) {
      // Check if number is composite
      if (
        primeNumbers[d] !== primeNumbers[i] &&
        primeNumbers[i] !== 1 &&
        primeNumbers[d] !== 1 &&
        primeNumbers[d] % primeNumbers[i] === 0
      ) {
        // Perform in-place mutation for better memory efficiency
        primeNumbers.splice(d, 1);
      }
    }
  }

  return primeNumbers;
}
