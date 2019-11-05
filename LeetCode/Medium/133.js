// Definition for a Node.
function Node(val, neighbors) {
  this.val = val;
  this.neighbors = neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
export default function cloneGraph(node) {
  const map = new Map();
  return cloneGraphAux(node, map);
}

const cloneGraphAux = (node, map) => {
  if (map.has(node.val)) return map.get(node.val);
  const clonedNode = new Node(node.val, null);
  clonedNode.val = node.val;
  map.set(node.val, clonedNode);
  const n = [];
  for (const child of node.neighbors) {
    n.push(cloneGraphAux(child, map));
  }
  clonedNode.neighbors = n;
  return clonedNode;
};
