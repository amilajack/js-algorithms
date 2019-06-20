/**
 * Max Heap Property: Each node has children that are less than or equal to their parents.
 *
 * Min Heap Property: A min heap has the exact same properties as a max heap with the difference
 *                    that children are greater than or equal to the parent.
 *
 * Binary Heap: Perfectly balanced binary heap. Because of this, the root
 *              always has the largest value in a max heap.
 *
 * @TODO: Refactor to add 'MinHeap'
 * @flow
 */
export default class MaxHeap {
  nodes: Array<number> = [];

  constructor(items: Array<number> = []) {
    this.buildHeap(items);
  }

  insert(node: number) {
    this.nodes.push(node);
    if (this.nodes.length === 1) {
      return;
    }
    this._determineSwapWithParent(this.nodes.length - 1);
  }

  get() {
    return this.nodes;
  }

  delete(node: number): number {
    const nodeIndex = this.nodes.indexOf(node);
    this.deleteNodeIndex(nodeIndex);
    return node;
  }

  deleteNodeIndex(nodeIndex: number): number {
    const node = this.nodes[nodeIndex];
    // Swap the node and the last node
    const nodeValue = this.nodes[nodeIndex];
    const lastNodeValue = this.nodes[this.nodes.length - 1];
    this.nodes[nodeIndex] = lastNodeValue;
    this.nodes[this.nodes.length - 1] = nodeValue;
    this.nodes = this.nodes.filter((e, i) => i !== this.nodes.length - 1);
    // maxHeapify the root
    this.maxHeapify(0);
    return node;
  }

  _determineSwapWithParent(nodeIndex: number) {
    const parentIndex = Math.floor(nodeIndex / 2);
    const leftIndex = 2 * parentIndex;
    const rightIndex = 2 * parentIndex + 1;
    const parent = this.nodes[parentIndex];

    // If not greater than its parent
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

  /**
   * Build a heap from a list of elements
   * @complexity: O(nlogn)
   */
  buildHeap(newItems: Array<number> = []) {
    for (let i = 0; i < newItems.length; i++) {
      this.nodes.push(newItems[i]);
      this._determineSwapWithParent(this.nodes.length - 1);
    }
  }

  getMax() {
    return this.nodes[0];
  }

  /**
   * If a have a node does not follow the heap property but the subtrees do, recursively
   * swap the root with its children until it does satisfy the heap property
   * @complexity: O(logn)
   *
   * @param nodeIndex: The index of the node to heapify
   */
  maxHeapify(nodeIndex: number) {
    const leftIndex = this.getLeft(nodeIndex);
    const rightIndex = this.getRight(nodeIndex);
    const nodeValue = this.nodes[nodeIndex];
    const leftValue = this.nodes[leftIndex];
    const rightValue = this.nodes[rightIndex];

    // If the root is smaller than any of its children
    if (leftValue > nodeValue || rightValue > nodeValue) {
      // If left child > right child, swap with root with left, vice versa
      if (leftValue > rightValue) {
        this.nodes[leftIndex] = nodeValue;
        this.nodes[nodeIndex] = leftValue;
        this.maxHeapify(leftIndex);
      } else {
        this.nodes[rightIndex] = nodeValue;
        this.nodes[nodeIndex] = rightValue;
        this.maxHeapify(rightIndex);
      }
    }
  }

  getLeft(nodeIndex: number) {
    return nodeIndex === 0 ? 1 : nodeIndex * 2;
  }

  getRight(nodeIndex: number) {
    return nodeIndex === 0 ? 2 : nodeIndex * 2 + 1;
  }
}
