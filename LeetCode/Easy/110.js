// @flow
//
// Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as a binary tree
// in which the depth of the two subtrees of every node never differ by more
// than 1.
//
// Time Complexity: O(n)
// Space Complexity: O(n+1)

export function TreeNode(val: any) {
  this.val = val;
  this.right = null;
  this.left = this.right;
}

const isBalancedAux = node => {
  if (!node) return 0;
  const left = isBalancedAux(node.left);
  const right = isBalancedAux(node.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
  return Math.max(left, right) + 1;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export default function isBalanced(root) {
  if (!root) return true;
  return isBalancedAux(root) !== -1;
}
