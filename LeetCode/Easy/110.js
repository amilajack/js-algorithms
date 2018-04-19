// @flow
//
// Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as a binary tree
// in which the depth of the two subtrees of every node never differ by more
// than 1.

function TreeNode(val: any) {
  this.val = val;
  this.right = null;
  this.left = this.right;
}

function TreeHeight(root: TreeNode, height: number = 0): number {
  if (!root) return 0;

  const first = TreeHeight(root.left, height);
  const sec = TreeHeight(root.right, height);

  return (first > sec ? first : sec) + 1;
}

export default function isBalanced(root: TreeNode): boolean {
  if (!root) return true;

  const first = TreeHeight(root.left);
  const sec = TreeHeight(root.right);

  const greatestPlusDiff =
    (first > sec ? first : sec) - (first > sec ? sec : first) <= 1;

  return greatestPlusDiff
    ? isBalanced(root.left) && isBalanced(root.right)
    : false;
}
