/**
 * A Priority Queue is a special kind of queue that sorts its values
 * This implementation uses numbers to denote the priority of elements
 *
 * Larger priority numbers denote a higher priority
 *
 * @flow
 */
import MaxHeap from './MaxHeap';

export class PriorityNode<T> {
  priority: number;

  data: T;
}

export default class PriorityQueue {
  items: Array<PriorityNode>;

  constructor(items: Array<PriorityNode>) {
    this.heap = new MaxHeap();
  }

  insert(node: PriorityNode) {}
}
