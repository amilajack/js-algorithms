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
  head: Node;

  tail: Node;

  integrity = new Set();

  constructor() {
    this.head = new Node({});
  }

  isEmpty(): boolean {
    return !!this.head;
  }

  revese(node: Node = this.head) {
    if (!node || !node.next) return node;
    const reversedNode = this.revese(node.next);
    node.next.next = node;
    node.next = null;
    return reversedNode;
  }

  delete(node: Node) {
    let curr = this.head;
    let prev = null;
    while (curr) {
      if (curr === node) {
        if (prev) {
          prev.next = curr.next;
          curr = null;
        } else {
          this.head = curr.next;
        }
        break;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
  }

  /**
   * Can be done with merge sort, can be O(nlogn) complexity
   * Similar to insertion sort
   * @complexity: O(n^2)
   */
  sort() {
    let { head } = this;

    while (head.hasNext()) {
      let innerHead = this.head;

      while (innerHead.hasNext()) {
        if (head.data > innerHead.data && head.data < innerHead.next.data) {
          // inserts
        }
        innerHead = innerHead.next;
      }
      head = head.next;
    }
  }

  /**
   * Find a node by its data
   */
  find(data: any): Node | false {
    let node = this.head;
    while (node.hasNext()) {
      if (node.data === data) {
        return node;
      }
      node = node.next;
    }
    return false;
  }

  insertAfter = this.insert;

  insert(data: any, begin?: Node): boolean {
    const node = new Node(data);
    if (begin && this.integrity.has(node)) return false;
    const headNext = (begin || this.head).next;

    this.integrity.add(node);
    this.head.next = node;
    this.head.next.next = headNext;

    return true;
  }

  toString() {
    const items = [];
    let node = this.head;
    items.push(node);

    while (node.next) {
      items.push(node.next);
      node = node.next;
    }

    return items;
  }
}

class Node {
  data: number | string = 0;

  next: Node | boolean = false;

  constructor(data: any = {}, next: Node | boolean = false) {
    this.data = data;
    this.next = next;
  }

  hasNext(): boolean {
    return this.next !== false;
  }

  /**
   * Remove first link
   */
  remove() {
    if (!this.isEmpty() && this.head.hasNext()) {
      this.head = this.head.next;
    }
  }

  /**
   * Append after node
   */
  append(data: any): boolean {
    const node = new Node(data);
    const { next } = this;

    node.next = next;
    this.next = node;

    return true;
  }
}
