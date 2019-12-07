/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const verticalTraversalAux = (root, map) => {
  if (!root) return;
  const queue = [];
  queue.push([root, 0]);
  while (queue.length) {
    const [node, x] = queue.shift();
    if (map.has(x)) {
      const a = map.get(x);
      a.push(node.val);
    } else {
      map.set(x, [node.val]);
    }
    if (node.left) queue.push([node.left, x - 1]);
    if (node.right) queue.push([node.right, x + 1]);
  }
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export default function verticalTraversal(root) {
  const map = new Map();
  const mat = [];
  verticalTraversalAux(root, map, mat);
  const keys = Array.from(map.keys()).sort((a, b) => a - b);
  const res = [];
  for (const key of keys) {
    res.push(map.get(key));
  }
  return res;
}
