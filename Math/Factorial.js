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
import { expect } from 'chai'


type num = number

export default function FactorialRecursive(number: num, product: num = 1): num {
  switch (number) {
    case 1:
      return product
    default:
      return FactorialRecursive(number - 1, product * number)
  }
}

function FactorialIterative(number: num): num {
  let factorial = 1
  let current = 1

  while (current < number) {
    current++
    factorial *= current
  }

  return factorial
}

test('FactorialRecursive', () => {
  expect(FactorialRecursive(1)).to.equal(1)
  expect(FactorialRecursive(3)).to.equal(6)
  expect(FactorialRecursive(4)).to.equal(24)
  expect(FactorialRecursive(10)).to.equal(3628800)
  expect(FactorialIterative(1)).to.equal(1)
  expect(FactorialIterative(3)).to.equal(6)
  expect(FactorialIterative(4)).to.equal(24)
  expect(FactorialIterative(10)).to.equal(3628800)
})
