// @flow
class Node {
  data: Object = {};

  next: Node | boolean = false;

  constructor(data: any = {}, next: Node | boolean = false) {
    this.data = data;
    this.next = next;
  }

  hasNext(): boolean {
    return this.next !== false;
  }
}

export default class DoublyLinkedList {
  head: Node;

  tail: Node;

  head: Node;

  integrity = new Set();

  constructor() {
    this.head = new Node({});
    this.tail = this.head;
  }

  isEmpty(): boolean {
    return !!this.head;
  }

  // Remove first link
  remove() {
    if (!this.isEmpty() && this.head.hasNext()) {
      this.head = this.head.next;
    }
  }

  has() {}

  next() {}

  // @TODO
  // insertList(list: DoublyLinkedList): bool {}

  /**
   * Append node to end of list
   */
  insert(data: any, begin?: Node): boolean {
    const target: Node = begin || this.tail;
    const node: Node = new Node(data);

    const tempNext = target.next;
    node.next = tempNext;

    target.next = node;

    return true;
  }
}
