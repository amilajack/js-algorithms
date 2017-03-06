// LinkedList
//
// ex. A list of objects with values and nexts to other values
//
// vowels: ['a', next] -> ['b', next] -> ['c', next]
//         ^^^^^^^^^^^   node             ^ data  ^ next
//
// Random Access: O(n)
// Insertion/Deletion: O(1)
//
// @flow
export default class LinkedList {
  head: Node

  tail: Node

  integrity = new Set()

  constructor() {
    this.head = new Node({});
  }

  isEmpty(): bool {
    return !!this.head;
  }

  has() {}

  next() {}

  insert(data: any, begin?: Node): bool {
    const node = new Node(data);
    if (begin && this.integrity.has(node)) return false;
    const headNext = (begin || this.head).next;

    this.integrity.add(node);
    this.head.next = node;
    this.head.next.next = headNext;

    return true;
  }
}

class Node {
  data: Object = {}

  next: Node | bool = false

  head: Node

  constructor(data: any = {}, next: Node | bool = false) {
    this.data = data;
    this.next = next;
  }

  hasNext(): bool {
    return this.next !== false;
  }

  // Remove first link
  remove() {
    if (!this.isEmpty() && this.head.hasNext()) {
      this.head = this.head.next;
    }
  }

  /**
   * Append after node
   */
  append(data: any): bool {
    const node = new Node(data);
    const { next } = this;

    node.next = next;
    this.next = node;

    return true;
  }
}
