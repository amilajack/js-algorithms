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
type num = number;
type pt = number[][];

export default function PascalRecursive(number: num, list: pt = []): pt {
  switch (list.length) {
    case 0:
      list.push([1]);
      return PascalRecursive(number, list);
    case 1:
      list.push([1, 1]);
      return PascalRecursive(number, list);
    case number:
      return list;
    default: {
      const _list = list[list.length - 1];
      const _tmp = [1];
      for (let i = 0; i < _list.length - 1; i++) {
        _tmp.push(_list[i] + _list[i + 1]);
      }
      _tmp.push(1);
      list.push(_tmp);
      return PascalRecursive(number, list);
    }
  }
}

export function PascalIterative(number: number): pt {
  if (number === 0) return [];
  const rows = [[1]];

  for (let i = 1; i < number; i++) {
    const some = [1];
    const length = rows[i - 1] ? rows[i - 1].length - 1 : 0;

    for (let j = 0; j < length; j++) {
      some.push(rows[i - 1][j] + (rows[i - 1][j + 1] || 0));
    }

    some.push(1);
    rows.push(some);
  }

  return rows;
}
