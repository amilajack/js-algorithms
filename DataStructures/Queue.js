// @flow
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
