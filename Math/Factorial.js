/**
 * What is a factorial? I think an example is better than an explaination in
 * this case:
 *
 * Factorial(4, 1)
 * 4 * Factorial(3)
 * 4 * 3 * Factorial(2)
 * 4 * 3 * 2 * Factorial(1)
 * 4 * 3 * 2 * 1
 *
 * @complexity: O(n)
 *
 * @flow
 */
type num = number;

export default function FactorialRecursive(number: num, product: num = 1): num {
  switch (number) {
    case 1:
      return product;
    default:
      return FactorialRecursive(number - 1, product * number);
  }
}

export function FactorialIterative(number: num): num {
  let factorial = 1;
  let current = 1;

  while (current < number) {
    current++;
    factorial *= current;
  }

  return factorial;
}
