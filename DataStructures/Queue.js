/**
 * Last in, last out (LILO)
 *
 * @TODO: Wite a new implementation of a queue that uses a linked list. This will
 *        make the pop() method O(1) time
 *
 * @flow
 */
export default class Queue<T> {
  items: T[]

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
