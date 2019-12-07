// 108. Convert Sorted Array to Binary Search Tree

// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5
import { TreeNode } from '../globals';

export default function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;
  const index = parseInt(nums.length / 2, 10);
  const mid = nums[index];
  const root = new TreeNode(mid);
  root.left = sortedArrayToBST(nums.slice(0, index));
  root.right = sortedArrayToBST(nums.slice(index + 1));
  return root;
}
