// @flow
const { expect } = require('chai')

function SelectionSort(elements: number[]): number[] {
  const length = elements.length

  for (let i = 0; i < length; i++) {
    let lowestIndex = i

    for (let j = i + 1; j < length; j++) {
      if (elements[j] < elements[lowestIndex]) {
        lowestIndex = j
      }
    }

    if (lowestIndex !== i) {
      swap(elements, i, lowestIndex)
    }
  }

  return elements
}

function swap(items, firstIndex, secondIndex){
  const temp = items[firstIndex]
  items[firstIndex] = items[secondIndex]
  items[secondIndex] = temp
}

expect(SelectionSort([122, 3, 2, 5, 33, 22, 11])).to.eql([2, 3, 5, 11, 22, 33, 122])
