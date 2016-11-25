// @flow
import { expect } from 'chai'


export default function MergeSortRecursive(items: number[]): number[] {
  return _divide(items)
}

const _items = []

function _divide(array: number[]): Array<number> | any {
  switch (array.length) {
    case 1:
      _items.push(array)
      return _items
    default: {
      const middle = Math.ceil(array.length / 2)
      const first = array.splice(middle)
      return _merge(
        _divide(first),
        _divide(array)
      )
    }
  }
}

// The 'target' array is the array that we'll merge into. This array will be
// shorter in length so that we don't run into
function _merge(first: number[], second: number[]): number[] {
  const merged = []
  const [target, source] = first.length > second.length
                            ? [first, second]
                            : [second, first]

  for (let i = 0; i < target.length && i < source.length; i++) {
    if (target[i] < source[i]) {
      merged.push(target[i])
      merged.push(source[i])
    } else {
      merged.push(source[i])
      merged.push(target[i])
    }
  }

  if (merged.length < target.length + source.length) {
    const diff = target.length - source.length
    for (let i = target.length - diff; i < target.length; i++) {
      merged.push(target[i])
    }
  }

  return merged
}

// test('MergeSortRecursive()', () => {
  expect(_merge([1, 3, 4], [3, 4, 5])).to.eql([1, 3, 3, 4, 4, 5])
  expect(_merge([2], [1])).to.eql([1, 2])
  expect(_merge([1, 3, 4], [3, 4, 5, 6])).to.eql([1, 3, 3, 4, 4, 5, 6])
  expect(MergeSortRecursive([])).to.eql([])
  expect(MergeSortRecursive([1])).to.eql([1])
  expect(MergeSortRecursive([1, 3, 2, 10, 7, 5, 4])).to.eql([1, 2, 3, 4, 5, 7, 10])
// })
