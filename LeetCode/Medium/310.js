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
    const a = [];
    for (const node of nodes) {
      ans.delete(node);
      // delete the edges from the current node to other nodes
      for (const child of adj[node]) {
        adj[child].delete(node);
        adj[node].delete(child);
        if (adj[child].size === 1) {
          a.push(child);
        }
      }
    }
    if (ans.size < 3) break;
    if (a.length) queue.push(a);
  }

  return Array.from(ans);
}
