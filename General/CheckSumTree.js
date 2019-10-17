// Write a function that returns true if the given Binary Tree is SumTree else false. A SumTree is a Binary Tree
// where the value of a node is equal to sum of the nodes present in its left subtree and right subtree. An empty
// tree is SumTree and sum of an empty tree can be considered as 0. A leaf node is also considered as SumTree.

function SumTreeAux(node) {
  if (!node) return 0;
  const left = SumTreeAux(node.left);
  const right = SumTreeAux(node.right);
  if (left < 0 || right < 0) return -1;
  return left.val + right.val === node.val ? node.val : -1;
}

export default function SumTree(node) {
  return SumTreeAux(node) > 0;
}
