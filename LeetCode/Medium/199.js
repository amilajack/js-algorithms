// 199. Binary Tree Right Side View

// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const getDepth = (node, depth, map) => {
  if (!node) return;
  map.set(node, depth);
  if (node.left) getDepth(node.left, depth + 1, map);
  if (node.right) getDepth(node.right, depth + 1, map);
};

export default function rightSideView(root) {
  // BFS from right to left
  const queue = [];
  const map = new Map();
  getDepth(root, 0, map);
  const ans = [];
  if (!root) return [];
  const set = new Set();

  queue.push(root);
  while (queue.length) {
    const item = queue.shift();
    if (map.has(item)) {
      if (item.right) queue.push(item.right);
      if (item.left) queue.push(item.left);
      if (!set.has(map.get(item))) {
        ans.push(item.val);
        set.add(map.get(item));
      }
    }
  }
  return ans;
}
