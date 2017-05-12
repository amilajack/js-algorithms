/**
 * A Priority Queue is a special kind of queue that sorts its values
 * This implementation uses numbers to denote the priority of elements
 *
 * @flow
 */
import HeapSort from '../Sorting/HeapSort';

export class PriorityNode<T> {
  priority: number
  data: T
}

export default class PriorityQueue {

  items: Array<PriorityNode>

  constructor(item: Array<PriorityNode>) {

  }

  insert(node: PriorityNode) {

  }


}
