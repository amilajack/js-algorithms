/**
 * @flow
 */
import { expect } from 'chai'


type num = number

function integ(coefs: num[]): num[] {
  const newCoefs = coefs.map(
    (coef: num, index: num): num => coef / (coefs.length - index)
  )

  return [...newCoefs, 0]
}

function addExp(coefs: num[], x: num): num {
  let sum = 0
  const some = coefs.map((a: num, index: num): num =>
    (x ** coefs.length - index - 1) * a
  )

  some.forEach((e: num) => {
    sum += e
  })

  return sum
}

function areaExact(coefs: num[], a: num, b: num): num {
  return addExp(integ(coefs), b) - addExp(integ(coefs), a)
}

function areaNumerical(coefs: num[], delta: num = 1, a: num, b: num): num {
  let sum = 0

  for (let i = a; i < b; i += delta) {
    const comp = addExp(coefs, i) * delta
    sum += comp
  }

  return sum
}

expect(areaExact([3, 4, 5], 0, 3)).to.equal(60)
expect(Math.round(areaNumerical([3, 4, 5], 0.001, 0, 3))).to.equal(60)
