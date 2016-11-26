// Validate if a sudoku board is invald
// @flow
import { expect } from 'chai'


type grid = number[][]

const values = [
  [1, 4, 2, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7],
  [1, 4, 1, 6, 7, 2, 6, 7, 7]
]

const _grid: grid = [
  [0, 0], [1, 0], [2, 0],
  [0, 1], [1, 1], [2, 1],
  [0, 2], [1, 2], [2, 2]
]

function dupeRight(array: grid): grid {
  return array.map((each: number[]): number[] => [each[0] + 3, each[1]])
}

function dupeBottom(array: grid): grid {
  return array.map((each: number[]): number[] => [each[0], each[1] + 3])
}

function flatten(array: grid): grid {
  return array.reduce((p: any, c: any): any[] => [...p, ...c], [])
}

/**
 * @complexity Time Compexity: O(n^2)
 *             where n is the number of rows of the matrices
 */
function dupe(rowCount: number = 3): grid {
  const items = []

  items.push(_grid)

  for (let start = 0; start < rowCount; start++) {
    for (let inner = 0; inner < rowCount; inner++) {
      if (start === 0 && inner === 0) {
        continue
      }

      if (items.length % 3 === 0) {
        items.push(dupeBottom(items[items.length - 3]))
        continue
      }

      items.push(dupeRight(items[items.length - 1]))
    }
  }

  return items
}

//
// Tests
//
test('Sudoku', () => {
  // Test dupeRight
  expect(dupeRight(_grid)).to.eql([
    [3, 0], [4, 0], [5, 0],
    [3, 1], [4, 1], [5, 1],
    [3, 2], [4, 2], [5, 2]
  ])

  // Test dupeBottom
  expect(dupeBottom(_grid)).to.eql([
    [0, 3], [1, 3], [2, 3],
    [0, 4], [1, 4], [2, 4],
    [0, 5], [1, 5], [2, 5]
  ])

  // Test flatten
  expect(flatten([[1, 3], [6, 5]])).to.eql([1, 3, 6, 5])
})
