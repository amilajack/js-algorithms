/**
 * @flow
 */
import { expect } from 'chai'


function integ(coefs) {
  const newCoefs = coefs.map(
    (coef, index) => coef / (coefs.length - index)
  )

  return [...newCoefs, 0]
}

function addExp(coefs: number, x: number): number {
  let sum = 0
  const some = coefs.map((a: number, index: number): number =>
    Math.pow(x, coefs.length - index - 1) * a
  )

  for (const e of some) {
    sum += e
  }

  return sum
}

function areaExact(coefs, a, b) {
  return addExp(integ(coefs), b) - addExp(integ(coefs), a)
}

function areaNumerical(coefs, delta = 1, a, b) {
  let sum = 0

  for (let i = a; i < b; i += delta) {
    const comp = addExp(coefs, i) * delta
    sum += comp
  }

  return sum
}

expect(areaExact([3, 4, 5], 0, 3)).to.equal(60)
expect(Math.round(areaNumerical([3, 4, 5], 0.001, 0, 3))).to.equal(60)
