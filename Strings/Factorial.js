/**
 * What is a factorial? I think an example is better than an explaination in this
 * case:
 *
 * Permutation of 5 = 1 * 2 * 3 * 4 * 5
 *
 * @flow
 */
import { expect } from 'chai'


export default function Factorial(number: number, product: number = 1): number {
  switch (number) {
    case 1:
      return product
    default:
      return Factorial(number, (product - 1))
  }
}

expect(Factorial(10)).to.equal(3628800)
