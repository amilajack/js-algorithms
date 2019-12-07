// See https://leetcode.com/problems/binary-tree-paths/

const getPaths = (root, paths, parent) => {
  if (root === null) return;
  // Clone
  parent = [...parent];
  // Push node value
  parent.push(root.val);
  if (root.left) getPaths(root.left, paths, parent);
  if (root.right) getPaths(root.right, paths, parent);
  if (!root.left && !root.right) paths.push(parent.join('->'));
};

export default function binaryTreePaths(root) {
  const paths = [];
  const parent = [];
  getPaths(root, paths, parent);
  return paths;
}
