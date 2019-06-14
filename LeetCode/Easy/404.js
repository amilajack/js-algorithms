// Sum of Left Leaves
// Find the sum of all left leaves in a given binary tree

//   3
// /   \
// 9    20
//    /   \
//   15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeavesAux = (root, sum, isLeft) => {
  if (root === null) return 0;
  if (!root.left && !root.right && isLeft) return root.val;
  if (root.left) sum += sumOfLeftLeavesAux(root.left, 0, true);
  if (root.right) sum += sumOfLeftLeavesAux(root.right, 0, false);
  return sum;
};

export default function sumOfLeftLeaves(root) {
  return sumOfLeftLeavesAux(root, 0, false);
}
