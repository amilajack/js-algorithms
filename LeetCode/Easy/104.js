// @flow
import { expect } from 'chai'

function TreeNode(val: any) {
  this.val = val
  this.left = this.right = null
}

function maxDepth(root: TreeNode, count: number = 0): number {
  if (!root) return 0

  const first = maxDepth(root.left, count)
  const sec = maxDepth(root.right, count)

  return (first > sec ? first : sec) + 1
}

const t = new TreeNode(1)
const t2 = new TreeNode(2)
const t3 = new TreeNode(3)

//           t1
//         /   \
//       t2     null
//      / \
//   null  t3


t.left = t2.right = t3

expect(maxDepth(t)).to.equal(2)
