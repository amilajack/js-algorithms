// 117. Populating Next Right Pointers in Each Node II

// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
export default function connect(root) {
  // BFS
  if (!root) return root;
  const depth = new Map();
  // For each level of tree, point
  const queue = [];
  queue.push(root);
  depth.set(root, 0);
  let prev;
  while (queue.length) {
    const item = queue.shift();
    const d = depth.get(item);
    if (prev && d === depth.get(prev)) {
      prev.next = item;
    } else if (prev) prev.next = null;
    prev = item;
    if (item.left) {
      queue.push(item.left);
      depth.set(item.left, d + 1);
    }
    if (item.right) {
      queue.push(item.right);
      depth.set(item.right, d + 1);
    }
  }
  return root;
}
