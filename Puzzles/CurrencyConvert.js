function traverse(adj, startNode, endNode) {
  // BFS
  const queue = [];
  const visited = new Set();
  queue.push({ node: adj.get(startNode), rate: 1 });
  while (queue.length) {
    // Detect cycles
    if (visited.size === adj.size) return -1;
    let { rate } = queue.shift();
    const { node, parent, name } = queue.shift();
    if (visited.has(node)) continue;
    // use parent and current node to find rate
    const computedRate = adj.get(parent);
    if (computedRate.has(name)) {
      rate *= adj.get(parent).get(name);
      if (node.name === endNode) return rate;
      const children = adj.get(node);
      for (const child of children) {
        queue.push({ node: child, rate, parent: node });
      }
    }
    visited.add(node);
  }
  return -1;
}

export default function getConversionRate(convs, startNode, endNode) {
  const adj = new Map();
  // construct graph
  for (const conv of convs) {
    const [from, to, rate] = conv;
    if (adj.has(from)) {
      const list = adj.get;
      list.push({ node: from, rate });
    } else {
      const list = [];
      list.push({ node: from, rate });
      adj.set(from, list);
    }
    // add inv
    if (adj.has(to)) {
      const list = adj.get(to);
      list.push({ node: to, rate: 1 / rate });
    } else {
      const list = [];
      list.push({ node: from, rate: 1 / rate });
      adj.set(to, list);
    }
  }
  return traverse(adj, startNode, endNode);
}
