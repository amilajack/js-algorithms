// For an undirected graph with tree characteristics, we can choose any node
// as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

// Format
// The graph contains n nodes which are labeled from 0 to n - 1. You will be given the
// number n and a list of undirected edges (each edge is a pair of labels).

// You can assume that no duplicate edges will appear in edges. Since all edges are
// undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

// Observations:
// The height of a graph is maximal when the tree is rooted at a leaf. Another observation
// is that the nodes in the centermost of the graph have the lowest height when chosen to
// be the root. The procedure is then to delete leaves until there are are either only one
// or two nodes left.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
export default function findMinHeightTrees(n, edges) {
  if (n === 2) return edges[0];
  const adj = new Array(n);
  for (let i = 0; i < n; i++) {
    adj[i] = new Set();
  }
  for (const edge of edges) {
    const [a, b] = edge;
    adj[a].add(b);
    adj[b].add(a);
  }
  const ans = new Set();
  for (let i = 0; i < n; i++) {
    ans.add(i);
  }
  // Find leaves and add them to queue
  const queue = [];
  const a = [];
  for (let i = 0; i < n; i++) {
    if (adj[i].size === 1) {
      a.push(i);
    }
  }
  queue.push(a);

  // While set has more than two nodes, remove them
  while (queue.length) {
    const nodes = queue.shift();
    const b = [];
    for (const node of nodes) {
      ans.delete(node);
      // delete the edges from the current node to other nodes
      for (const child of adj[node]) {
        adj[child].delete(node);
        adj[node].delete(child);
        if (adj[child].size === 1) {
          b.push(child);
        }
      }
    }
    if (ans.size < 3) break;
    if (b.length) queue.push(b);
  }

  return Array.from(ans);
}
