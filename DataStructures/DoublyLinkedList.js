// @flow
import { expect } from 'chai';


class DoublyLinkedList {
  head: Node

  tail: Node

  head: Node

  integrity = new Set()

  constructor() {
    this.head = new Node({});
  }

  isEmpty(): bool {
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

  insertList(list: DoublyLinkedList): bool {

  }

  /**
   * Append node to end of list
   */
  insert(data: any, begin?: Node): bool {
    const target: Node = begin || this.tail;
    const node: Node = new Node(data);

    const tempNext = target.next;
    node.next = tempNext;

    target.next = node;

    return true;
  }
}

class Node {
  data: Object = {}

  next: Node | bool = false

  constructor(data: any = {}, next: Node | bool = false) {
    this.data = data;
    this.next = next;
  }

  hasNext(): bool {
    return this.next !== false;
  }
}

const linkedList = new DoublyLinkedList();
linkedList.insert('soo');
linkedList.insert('doo');

expect(linkedList.head.data).to.eql({});
expect(linkedList.head.next.data).to.equal('doo');
expect(linkedList.head.next.next.data).to.equal('soo');
