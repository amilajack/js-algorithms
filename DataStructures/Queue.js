/**
 * Last in, last out (LILO)
 *
 * @TODO: Wite a new implementation of a queue that uses a linked list. This will
 *        make the pop() method O(1) time
 *
 * @flow
 */
export default class Queue<T> {
  items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  push(item: T): T[] {
    this.items.push(item);
    return this.items;
  }

  pop(): T {
    return this.items.shift();
  }

  take(): T {
    const [item] = this.items.splice(0, 1);
    return item;
  }

  size(): number {
    return this.items.length;
  }
}

class Node {
  next = null;

  constructor(data = {}) {
    this.data = data;
  }
}

export class QueueLinkedList {
  first = null;

  last = null;

  /**
   * Add an item to the queue
   */
  add(data) {
    const node = new Node(data);
    let { last, first } = this;

    if (first === null) {
      first = node;
    }
    if (last !== null) {
      last.next = node;
    }
    last = node;
  }

  /**
   * Take an item from the queue
   */
  remove() {
    let { first } = this;
    const { data } = first;
    if (first === null) {
      return null;
    }
    if (first.next === null) {
      this.last = null;
      first = null;
    } else {
      first = first.next;
    }
    return data;
  }
}
