// @flow
//
// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root
// node down to the farthest leaf node.

/* eslint no-multi-assign: 0 */

function TreeNode(val: any) {
  this.val = val;
  this.left = this.right = null;
}

export default function MaxDepth(root: TreeNode, count: number = 0): number {
  if (!root) return 0;

  const first = MaxDepth(root.left, count);
  const sec = MaxDepth(root.right, count);

  return Math.max(first, sec) + 1;
}

const t = new TreeNode(1);
const t2 = new TreeNode(2);
const t3 = new TreeNode(3);

//           t1
//         /   \
//       t2     null
//      / \
//   null  t3

t.left = t2.right = t3;

// expect(MaxDepth(t)).to.equal(2);
