/* eslint max-classes-per-file: off */

// @flow
class Node {
  data: number;

  parent: Node;

  left: Node;

  right: Node;

  constructor(data: number) {
    this.data = data;
  }

  isLeaf(): boolean {
    return !this.left && !this.right;
  }
}

export default class BinarySearchTree {
  root: Node;

  items = [];

  constructor(items: Array<number>) {
    for (const item of items) this.add(item);
  }

  toArray(node?: Node): boolean | void {
    if (!node) node = this.root;

    if (node.isLeaf()) {
      if (node.left) this.items.push(node.left.data);
      this.items.push(node.data);
      if (node.right) this.items.push(node.right.data);
      return true;
    }

    if (node.left) this.toArray(node.left);
    this.items.push(node.data);
    if (node.right) this.toArray(node.right);
  }

  add(element: number, root?: Node): boolean {
    let _root = root;

    if (!this.root) {
      this.root = new Node(element);
      return true;
    }

    if (!_root) _root = this.root;

    if (!_root.data) {
      _root.data = element;
      return true;
    }

    if (_root.data > element) {
      if (!_root.left) {
        _root.left = new Node(element);
        return true;
      }
      return this.add(element, _root.left);
    }

    if (!_root.right) {
      _root.right = new Node(element);
      return true;
    }

    return this.add(element, _root.right);
  }

  remove() {}

  find() {}
}
