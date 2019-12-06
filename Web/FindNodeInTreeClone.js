//   A         B
//  / \       / \
// O   O     O   O
//    /|\       /|\
//   x O O     y O O
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

function traversePathInB(B, paths) {
  let node = B;

  for (let i = 0; i < paths.length; i++) {
    node = node.children[i];
  }

  return node;
}

export default function findX(A, B, x) {
  const paths = findXInA(A, x);
  return traversePathInB(B, paths);
}
