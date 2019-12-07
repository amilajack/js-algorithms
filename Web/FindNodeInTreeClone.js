// Given a tree and it’s deep clone and given a node, x, in tree A, find the same node in tree B

//   A         B
//  / \       / \
// O   O     O   O
//    /|\       /|\
//   x O O     y O O

/**
 * Complexity: O(klog(n))
 * n = number of nodes in tree A
 * k = branching factor of tree
 */
function findXInA(root, x) {
  let node = x;
  const paths = [];
  while (node !== root) {
    const nodeIndex = Array.prototype.indexOf.call(
      node.parentElement.children,
      node
    );
    paths.push(nodeIndex);
    node = node.parentElement;
  }
  return paths.reverse();
}

/**
 * Complexity: O(log(n))
 * n = number of nodes in tree B
 */
function traversePathInB(B, paths) {
  let node = B;

  for (let i = 0; i < paths.length; i++) {
    node = node.children[i];
  }

  return node;
}

/**
 * Complexity: O(klog(n))
 * n = number of nodes in tree A
 * k = branching factor of tree
 */
export default function findX(A, B, x) {
  const paths = findXInA(A, x);
  return traversePathInB(B, paths);
}
