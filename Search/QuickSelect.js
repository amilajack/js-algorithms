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
  const itemCopy = [...items]
  return RandomizedSelect(itemCopy, 0, items.length - 1, i)
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
  Swap(items, i, r)
  return Partition(items, p, r)
}

function Partition(items: num[], p: num, r: num): num {
  const x = items[r]
  let i = p - 1
  for (let j = p; j < r; j++) {
    if (items[j] <= x) {
      i++
      Swap(items, i, j)
    }
  }
  Swap(items, i + 1, r)
  return i + 1
}

function getRandomInt(min: num, max: num): num {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Swap(arr: any[], x: any, y: any) {
  const temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

expect(QuickSelect([5, 9, 3, 1, 7], 3)).to.equal(5)
expect(QuickSelect([52, 55, 102, 5, -7, 8, 13, 7], 1)).to.equal(-7)
expect(QuickSelect([6, 2, -12, 32, 79, 67, 8, 1, 15, -6, 78, 104], 12)).to.equal(104)
expect(QuickSelect([4, -1, 0, 36, -6, -4, 6, 52, 105, 232, 1, 69], 4)).to.equal(0)
