// Pascal's Triangle
//
// Given numRows, generate the first numRows of Pascal's triangle.
//
// For example, given numRows = 5, return
// [
//       [1],
//      [1,1],
//     [1,2,1],
//    [1,3,3,1],
//   [1,4,6,4,1],
//  [1,5,10,10,5,1]
// ]
//
// @flow
import { expect } from 'chai'


type num = number
type pt = Array<Array<number>>

function PascalRecursive(number: num, list: pt = []): pt {
  switch (list.length) {
    case 0:
      list.push([1])
      return PascalRecursive(
        number,
        list
      )
    case 1:
      list.push([1, 1])
      return PascalRecursive(
        number,
        list
      )
    case number:
      return list
    default: {
      const _list = list[list.length - 1]
      const _tmp = [1]
      for (let i = 0; i < _list.length - 1; i++) {
        _tmp.push(_list[i] + _list[i + 1])
      }
      _tmp.push(1)
      list.push(_tmp)
      return PascalRecursive(
        number,
        list
      )
    }
  }
}

// @TODO
// function PascalIterative(number: number) {}

// Tests
expect(PascalRecursive(2)).to.eql([
  [1],
  [1, 1]
])

expect(PascalRecursive(5)).to.eql([
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1]
])
