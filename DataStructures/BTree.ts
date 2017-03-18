import {expect} from 'chai'


class TreeNode<T> {
  keys: Array<number> = []

  children: Array<TreeNode<T>> = []

  parent: TreeNode<T>

  isLeaf() {
    return this.children.length === 0
  }

  findMiddleChild() {
    return this.children[Math.ceil(this.children.length / 2)]
  }
}

class BTree<T> {
  root: TreeNode<T>

  k: number = 3

  search(value: number, node: TreeNode<T> = this.root): string {
    // For each key of the node's keys
    for (let i = 0; i < node.keys.length; i++) {
      // If the value is less than the current key
      if (value === node.keys[i]) {
        return value;
      }
      if (value < node.keys[i]) {
        if (node.children[i].keys.length === 0) {
          return -1;
        }
        return this.search(value, node.children[i]);
      }
    }

    return -1;
  }

  insert(value: number, node = this.root): boolean {
    // For each key of the node's keys
    for (let i = 0; i < node.keys.length; i++) {
      // If the value is less than the current key
      if (value === node.keys[i]) {
        return value;
      }
      if (value < node.keys[i]) {
        if (node.children[i].keys.length === 0) {
          return -1;
        }
        return this.search(value, node.children[i]);
      }
    }

    return true;
  }

  split(node: TreeNode<T>) {
    // If the node doesn't need to be split, abort
    if (node.children.length < this.k) {
      return;
    } else {
      // Otherwise, Split

      // Find index of 'middle' key
      const middleIndex = Math.ceil(node.keys.length / 2);


    }
  }
}

