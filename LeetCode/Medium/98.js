// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const binSearch = (tree, val) => {
  if (tree === null) return false;
  if (tree.val === val) return true;
  return val > tree.val
    ? binSearch(tree.right, val)
    : binSearch(tree.left, val);
};

const traverseAndValidate = (root, tree) => {
  if (tree === null || root === null) return true;
  if (!binSearch(root, tree.val)) return false;
  return (
    traverseAndValidate(root, tree.left) &&
    traverseAndValidate(root, tree.right)
  );
};

export default function isValidBST(root) {
  const values = [];
  // BFS
  const queue = [];
  if (root) queue.push(root);
  while (queue.length) {
    const item = queue.shift();
    values.push(item.val);
    if (item.left) queue.push(item.left);
    if (item.right) queue.push(item.right);
  }
  // Validate if BST has duplicates (BST does not allow duplicates)
  const set = new Set(values);
  if (set.size !== values.length) return false;
  return traverseAndValidate(root, root);
}
