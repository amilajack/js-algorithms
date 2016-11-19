// Pascal's Triangle
//
// Given numRows, generate the first numRows of Pascal's triangle.
//
// For example, given numRows = 5, return
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1],
//  [1,5,10,5,1]
// ]
//
// @flow
import { expect } from 'chai'


type pt = Array<Array<any>>
type num = number

function PascalRecursive(number: num, list: pt = []): pt {
  switch (list.length) {
    case 0:
      list.push([1])
      return list
    case 1:
      list.push([1], [1])
      return list
    case number:
      return list
    default: {
      const _list = list[list.length - 1]
      _list.splice(1, _list.length - 1)
      return PascalRecursive(
        number,
        _list
      )
    }
  }
}

// function PascalIterative(number: number) {
//   const pascalNumbers = []
//   for (let i = 0; i < number; i++) {
//     pascalNumbers.push()
//   }
// }


expect(PascalRecursive(1)).to.eql([
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
