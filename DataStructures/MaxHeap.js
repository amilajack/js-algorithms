/**
 * @TODO: Refactor to add 'MaxHeap'
 * @flow
 */
export default class MaxHeap {

  nodes: Array<number> = [];

  insert(node: number) {
    this.nodes.push(node);
    if (this.nodes.length === 1) { return; }
    this._determineSwapWithParent(this.nodes.length - 1);
  }

  get() {
    return this.nodes;
  }

  delete(nodeIndex: number) {
    // Swap the node and the last node
    const node = this.nodes[nodeIndex];
    const lastNode = this.nodes[this.nodes.length - 1];
    this.nodes[nodeIndex] = lastNode;
    this.nodes[this.nodes.length - 1] = node;
  }

  _determineSwapWithParent(nodeIndex: number) {
    const parentIndex = Math.floor(nodeIndex / 2);
    const leftIndex = 2 * parentIndex;
    const rightIndex = 2 * parentIndex + 1;
    const parent = this.nodes[parentIndex];

    // Disallow duplicates
    if (this.nodes[nodeIndex] === this.nodes[parentIndex]) {
      return;
    }

    if (this.nodes[nodeIndex] > this.nodes[parentIndex]) {
      // Check if the node is left or right
      const left = this.nodes[leftIndex];
      const right = this.nodes[rightIndex];
      const isLeft = this.nodes[nodeIndex] === left;

      if (isLeft) {
        this.nodes[leftIndex] = parent;
        this.nodes[parentIndex] = left;
      } else {
        this.nodes[rightIndex] = parent;
        this.nodes[parentIndex] = right;
      }
      this._determineSwapWithParent(parentIndex);
    }
  }
}
