// @flow
import Queue from './Queue';

export class Node {
  id: number;

  parents: Array<number> = [];

  children: Array<number> = [];

  pi: number = Infinity;

  weight: number;

  data: any;
}

/**
 * d(v): distance from start to vertex v
 *       Initially assume that d(v) is infinity
 *
 * pi(v): predecessor on current best path to d(v)
 *
 * Optimal Substructure: Substructures of shortest path are shortest paths
 *
 * Relaxation: If there is a shorter path to d(v), update d(v) and pi(v)
 *             if (d(v) > d(u) + weight(u, v))
 *                d(v) = d(u) + weight(u, v))
 *                pi(v) = u
 */
export default class DAGAdjacencyList {
  /**
   * Space complexity: Θ(|V|^2)
   *
   * Vertex List:
   *  [1    =>    [1, 3]]
   *  [2    =>    [2, 4]]
   *  [3    =>    [3, 5]]
   *   ^ the index ^ the outgoing vertexes from node 1. Node.children property
   *
   * Vertex matrixes are better for graphs that are more dense
   */
  adjacencyList: Node[] = [];

  /**
   * Depth-First Search (DFS)
   * @param {number} the starting node
   * @param {number} the node to search for
   *
   * @TODO: Prevent cycles
   * @TODO: Add runtime
   */
  breadthFirstSearch(target: Node): boolean | Node {
    const queue = new Queue();

    if (!this.adjacencyList[target.id]) {
      return false;
    }

    // Push the node's immediate children of the first node
    this.adjacencyList[0].children.forEach(child =>
      queue.push(this.adjacencyList[child])
    );

    while (queue.size() > 0) {
      const currentSearchNode = queue.pop();

      if (currentSearchNode.id === target.id) {
        return currentSearchNode;
      }

      this.adjacencyList[currentSearchNode.id].children.forEach(child =>
        queue.push(this.adjacencyList[child])
      );
    }

    return false;
  }

  // Single Source Shortest Path (SSSP)
  // shortestPath(node: number, target: number): bool {

  /**
   * Depth-First Search is most easily implemented recursively
   * @TODO: Implement this using a Stack instead of implementing recursively
   *        to avoid call stack overflow
   * @param {number} node
   * @param {number} target
   */
  depthFirstSearch(node: Node, target: Node): boolean {
    const { children } = this.adjacencyList[node.id];

    // Base case
    if (node === target) return true;

    // Recursively DFS each child of the given node
    for (let i = 0; i < children; i++) {
      if (this.depthFirstSearch(children[i], target) === true) {
        return true;
      }
    }

    return false;
  }

  /**
   * A DAG must have at least one vertex that has no incoming edges
   * (no nodes pointing to it)
   */
  hasCycle() {}

  insert(node: Node) {
    // Add the node to the adjacency list
    if (!this.adjacencyList[node.id]) {
      this.adjacencyList[node.id] = node;
    }

    // Add the node to each parent
    if (node.parents) {
      node.parents.forEach((parent: number) => {
        this.adjacencyList[parent].children.push(node.id);
      });
    }
  }
}

export class DAGMatrix {
  /**
   * Space complexity: Θ(|V| + |E|)
   *
   * Vertex Matrix:
   *  Each array location represents a list of verticies
   *  For example, the array indexs (1, 4) will represent if the relationship
   *  between node 1 to node 4 exists.
   *
   * Vertex matrixes are better for graphs that are more dense
   */
  adjacencyMatrix: boolean[][] = [];
}
