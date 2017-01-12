/**
 * General Selection: Finding the kth smallest number
 *
 * Notes: QuickSelect is related to QuickSort, thus has optimal best and average
 * case (O(n)) but poor worst case (O(n^2))
 *
 * @flow
 */

import { expect } from 'chai'


type num = number

export default function QuickSelect(items: num[], i: num): num {
  return RandomizedSelect(items, 0, items.length, i)
}

function RandomizedSelect(items: num[], p: num, r: num, i: num): any {
  if (p === r) {
    return items[p]
  }
  const q = RandomizedPartition(items, p, r)
  const k = q - p + 1
  if (i === k) {
    return items[q]
  } else if (i < k) {
    return RandomizedSelect(items, p, q - 1, i)
  }
  return RandomizedSelect(items, q + 1, r, i - k)
}

function RandomizedPartition(items: num[], p: num, r: num): num {
  const i = getRandomInt(p, r)
  Swap(items[i], items[r])
  return Partition(items, p, r)
}

function Partition(items: num[], p: num, r: num): num {
  const x = items[r]
  let i = p - 1
  for (let j = p; p < (r - 1); j++) {
    if (items[j] <= x) {
      i++
      Swap(items[i], items[j])
    }
  }
  Swap(items[i + 1], items[r])
  return i + 1
}

function getRandomInt(min: num, max: num): num {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Swap(x: num, y: num) {
  const temp = x
  x = y
  y = temp
}


test('QuickSelect()', () => {
  expect(QuickSelect([5, 9, 3, 1, 7], 3)).to.equal(5)
})
