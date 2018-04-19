/**
 * Stacks allow data to be popped and pushed to a stack
 * Last in, first out (LIFO)
 *
 * ---
 * |a|
 * |b|
 * |c|
 * ---
 *
 * stack.pop()
 *
 * ---
 * |b|
 * |c|
 * ---   -> a
 *
 * stack.push(d)
 *
 * ---
 * |d|
 * |b|
 * |c|
 * ---   -> b
 *
 * @flow
 */
export default class Stack {
  items: [];

  constructor(items?: any[]) {
    this.items = items || [];
  }

  pop(): any {
    const isEnd = !!this.items.length;

    if (isEnd) {
      const item = this.items[this.items.length - 1];
      this.items.splice(this.items.length - 1, 1);
      return item;
    }

    return false;
  }

  push(item: any): Stack {
    this.items.push(item);
    return this;
  }

  empty(): boolean {
    return this.items.length === 0;
  }

  peek(): any {
    return this.items[this.items.length - 1];
  }
}
