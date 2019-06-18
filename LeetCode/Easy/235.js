// 235. Lowest Common Ancestor of a Binary Search Tree

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const dfs = (root, p, q, path, paths) => {
  if (!root) return;
  path.push(root);
  if (root.val === p.val || root.val === q.val) paths.push([...path]);
  if (root.left) dfs(root.left, p, q, [...path], paths);
  if (root.right) dfs(root.right, p, q, [...path], paths);
};

export default function lowestCommonAncestor(root, p, q) {
  const paths = [];
  dfs(root, p, q, [], paths);
  let [a, b] = paths;
  b = new Set(b);
  a = a.reverse();
  for (let i = 0; i < a.length; i++) {
    if (b.has(a[i])) return a[i];
  }
  return -1;
}
