// @flow
import { expect } from 'chai';


export default class Queue {
  items: any[]

  constructor(items: any[] = []) {
    this.items = items;
  }

  add(item: any): any[] {
    this.items.push(item);
    return this.items;
  }

  take(): any {
    const [item] = this.items.splice(0, 1);
    return item;
  }
}

test('Queue()', () => {
  const queue = new Queue();

  expect(queue.add('a')).to.eql(['a']);
  expect(queue.add('b')).to.eql(['a', 'b']);
  expect(queue.add('c')).to.eql(['a', 'b', 'c']);

  expect(queue.take()).to.equal('a');
  expect(queue.take()).to.equal('b');
  expect(queue.take()).to.equal('c');
});
