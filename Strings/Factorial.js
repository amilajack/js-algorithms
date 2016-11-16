/**
 * What is a factorial? I think an example is better than an explaination in this
 * case:
 *
 * Factorial(4, 1)
 * 4 * Factorial(3)
 * 4 * 3 * Factorial(2)
 * 4 * 3 * 2 * Factorial(1)
 * 4 * 3 * 2 * 1
 *
 * @flow
 */
import { expect } from 'chai'


type num = number

export default function Factorial(number: num, product: num = 1): num {
  switch (number) {
    case 1:
      return product
    default:
      return Factorial(number - 1, product * number)
  }
}

test('Factorial', () => {
  expect(Factorial(1)).to.equal(1)
  expect(Factorial(3)).to.equal(6)
  expect(Factorial(10)).to.equal(3628800)
})
