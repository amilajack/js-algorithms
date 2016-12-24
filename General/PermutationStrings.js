// @flow
//
// Given two strings, write a method to decide if one is a permutation of the
// other.
import { expect } from 'chai'


function PermutationString(first: string, second: string): bool {
  if (first.length !== second.length) return false

  const _first = new Set(first)
  const _second = new Set(second)

  if (_first.size !== _second.size) return false

  console.log(_first.values(), _second.values())

  for (const char of _first.values()) {
    if (!_second.has(char)) return false
  }

  return true
}

function PermutationStringInPlace(first: string, second: string): bool {
  if (first.length !== second.length) return false

  const _first = first.split('').sort()
  const _second = second.split('').sort()

  for (let i = 0; i < _first.length; i++) {
    if (_first[i] !== _second[i]) return false
  }

  return true
}


expect(PermutationStringInPlace('abc', 'ab')).to.equal(false)
expect(PermutationString('abcdef', 'xyz')).to.equal(false)

expect(PermutationStringInPlace('abc', 'ab')).to.equal(false)
expect(PermutationString('abcdef', 'xyz')).to.equal(false)

expect(PermutationStringInPlace('foo', 'off')).to.equal(false)
// expect(PermutationString('foo', 'off')).to.equal(false)
