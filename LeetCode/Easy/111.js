// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const minDepthAux = (root, depth) => {
  if (!root) return Infinity;
  if (!root.left && !root.right) {
    return depth + 1;
  }
  const left = minDepthAux(root.left, depth + 1);
  const right = minDepthAux(root.right, depth + 1);
  return Math.min(left, right);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
export default function minDepth(root) {
  if (!root) return 0;
  return minDepthAux(root, 0);
}
