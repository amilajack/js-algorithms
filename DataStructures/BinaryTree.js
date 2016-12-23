// @flow
/* eslint no-param-reassign: 0, consistent-return: 0 */
import { expect } from 'chai'


class Node {
  data: number

  parent: Node

  left: Node

  right: Node

  constructor(data: number) {
    this.data = data
  }

  isLeaf(): bool {
    return !this.left && !this.right
  }
}

export default class BinarySearchTree {
  root: Node;

  items = []

  toArray(node?: Node): bool | void {
    if (!node) node = this.root

    if (node.isLeaf()) {
      if (node.left) this.items.push(node.left.data)
      this.items.push(node.data)
      if (node.right) this.items.push(node.right.data)
      return true
    }

    if (node.left) this.toArray(node.left)
    this.items.push(node.data)
    if (node.right) this.toArray(node.right)
  }

  insert(element: number, root?: Node): bool {
    let _root = root

    if (!this.root) {
      this.root = new Node(element)
      return true
    }

    if (!_root) _root = this.root

    if (!_root.data) {
      _root.data = element
      return true
    }

    if (_root.data > element) {
      if (!_root.left) {
        _root.left = new Node(element)
        return true
      }
      return this.insert(element, _root.left)
    }

    if (!_root.right) {
      _root.right = new Node(element)
      return true
    }

    return this.insert(element, _root.right)
  }

  remove() {}

  find() {}
}

const bTree = new BinarySearchTree()
bTree.insert(10, bTree.root)
bTree.insert(2, bTree.root)
bTree.insert(8, bTree.root)
bTree.insert(9, bTree.root)
bTree.insert(3, bTree.root)

bTree.toArray()

expect(bTree.items).to.eql([2, 3, 8, 9, 10])

// expect(bTree.toArray()).to.eql([1, 3, 2, 6, 7, 13])
// expect(bTree.toArray()).to.eql([1, 3, 2, 6, 7, 13])
