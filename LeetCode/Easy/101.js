// @flow
//
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric
// around its center)
//
// [1, 2, 2, 3, 4, 4, 3]
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//
// The following is not symmetric:
//
//     1
//    / \
//   2   2
//    \   \
//    3    3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let items = []

function convertToArray(node: Object) {
  if (node.val) items.push(node.val)
  if (node.left) items.push(node.val)
  if (node.right) items.push(node.val)

  if (node.left) convertToArray(node.left)
  if (node.right) convertToArray(node.right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 *
 * [1, 2, 2, 3, 4, 4, 3]
 * [1], 0
 * [2, 2], 1 to 2, (2 ** 1) - 1
 * [3, 4, 4, 3], 3 to 6, diff = (2 ** 2) - 1
 */
function isSymmetric(root: Object): bool {
  // convertToArray(root)

  items = [1, 2, 2, 3, 5, 4, 3]
  // items = [1, 2, 2, 3, 4, 4, 3]

  // tree of one node is always symmetric
  if (items.length <= 1) return true

  // palindrome for items
  let end = 2
  let sub = 0
  let pwr = 1
  let start = 1
  let middle = 1
  const stop = 1

  while (start < end) {
    // compare the element n to items.last() - n
    if (items[start] !== items[end - sub]) return false

    sub++

    // if all elements have been checked, reset sub and update half and end
    if (start > middle) {
      start = end + 1
      pwr++
      sub = 0
      end += 2 ** pwr
      middle = Math.floor((end - start) / 2)
    } else {
      start++
    }

    if (stop > 100) break

    console.log(
      start,
      pwr,
      sub,
      end,
      middle
    )
  }

  return true
}

console.log(isSymmetric())
