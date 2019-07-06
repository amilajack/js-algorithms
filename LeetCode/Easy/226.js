// @flow
// Invert a binary tree
function TreeNode(val: any) {
  this.val = val;
  this.left = null;
  this.right = null;
}

export default function InvertTree(root: TreeNode): TreeNode {
  if (!root) return root;
  const { left, right } = root;
  root.left = right;
  root.right = left;
  InvertTree(root.left);
  InvertTree(root.right);
  return root;
}
