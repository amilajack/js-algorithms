/**
 * Kahns topsort algo
 * @param {*} nodes In adjacency list format
 */
export default function KahnsTopologicalSort(nodes) {
  const ordering = [];
  const dfsQueue = [];

  // Indexes correspond to node, values correspond to indegree
  // ex. 0 -> 3, node 0 has indegree 3
  const indegrees = new Array(nodes).fill(0);

  for (const outdegrees of Object.values(nodes)) {
    for (const outdegree of outdegrees) {
      indegrees[outdegree]++;
    }
  }

  if (!indegrees.includes(0)) {
    throw new Error('Cycle in graph');
  }

  // Find all nodes of indegree 0 and add them to queue. These
  // nodes have no parents so they go first in topological order
  for (let i = 0; i < indegrees.length; i++) {
    if (indegrees[i] === 0) {
      dfsQueue.push(nodes[i]);
    }
  }

  while (dfsQueue.length) {
    const node = dfsQueue.shift();
    ordering.push(node);
    // For each child, decrement indegree because we are removing parent
    for (const child of nodes[node]) {
      indegrees[child]--;
      if (indegrees[child] === 0) {
        dfsQueue.push(child);
      }
    }
  }

  if (ordering.length !== nodes.length) {
    throw new Error('Cycle in graph');
  }

  return ordering;
}
