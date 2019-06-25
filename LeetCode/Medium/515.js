// 515. Find Largest Value in Each Tree Row

// You need to find the largest value in each row of a binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const largestValuesAux = (root, depth, map) => {
  // DFS
  if (!root) return;
  if (Number.isInteger(map[depth])) {
    if (map[depth] < root.val) {
      map[depth] = root.val;
    }
  } else {
    map[depth] = root.val;
  }
  if (root.left) largestValuesAux(root.left, depth + 1, map);
  if (root.right) largestValuesAux(root.right, depth + 1, map);
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export default function largestValues(root) {
  const map = [];
  largestValuesAux(root, 0, map);
  return map;
}
