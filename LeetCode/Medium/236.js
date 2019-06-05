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

const trav = (root, node, path, paths) => {
  if (root === null) return;
  path.push(root);
  if (root.val === node.val) {
    paths.push(path);
    return;
  }
  if (root.left) trav(root.left, node, [...path], paths);
  if (root.right) trav(root.right, node, [...path], paths);
};

export default function lowestCommonAncestor(root, p, q) {
  let set = new Set();
  {
    const paths = [];
    trav(root, p, [], paths);
    if (!paths.length) return -1;
    const [path] = paths;
    if (path) set = new Set(path);
  }
  const paths = [];
  trav(root, q, [], paths);
  if (!paths.length) return -1;
  const [path] = paths;
  for (const item of path) {
    if (set.has(item)) return item;
  }
}
