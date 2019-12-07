/**
 * Initialize your data structure here.
 */
export default class StackQueue {
  constructor() {
    this.tmpStack = [];
    this.stack = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    if (this.stack.length === 0) return -1;
    if (this.stack.length === 1) {
      const item = this.stack.pop();
      return item;
    }
    while (this.stack.length !== 1) {
      const a = this.stack.pop();
      this.tmpStack.push(a);
    }
    const item = this.stack.pop();
    while (this.tmpStack.length !== 0) {
      const a = this.tmpStack.pop();
      this.stack.push(a);
    }
    return item;
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    if (this.stack.length === 0) return -1;
    if (this.stack.length === 1) {
      return this.stack[0];
    }
    while (this.stack.length !== 1) {
      const a = this.stack.pop();
      this.tmpStack.push(a);
    }
    const [item] = this.stack;
    while (this.tmpStack.length !== 0) {
      const a = this.tmpStack.pop();
      this.stack.push(a);
    }
    return item;
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.stack.length === 0;
  }
}

/**
 * Initialize your data structure here.
 */
export class StackQueueFast {
  constructor() {
    this.tmpStack = [];
    this.stack = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    if (this.stack.length === 0) return -1;
    if (this.stack.length === 1) {
      const item = this.stack.pop();
      return item;
    }
    while (this.stack.length !== 1) {
      const a = this.stack.pop();
      this.tmpStack.push(a);
    }
    const item = this.stack.pop();
    while (this.tmpStack.length !== 0) {
      const a = this.tmpStack.pop();
      this.stack.push(a);
    }
    return item;
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    if (this.stack.length === 0) return -1;
    if (this.stack.length === 1) {
      return this.stack[0];
    }
    while (this.stack.length !== 1) {
      const a = this.stack.pop();
      this.tmpStack.push(a);
    }
    const [item] = this.stack;
    while (this.tmpStack.length !== 0) {
      const a = this.tmpStack.pop();
      this.stack.push(a);
    }
    return item;
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.stack.length === 0;
  }
}
