// @flow
class TreeNode {
  keys: Array<number> = [];

  children: Array<TreeNode> = [];

  parent: TreeNode;

  isLeaf() {
    return this.children.length === 0;
  }

  findMiddleChild() {
    return this.children[Math.ceil(this.children.length / 2)];
  }
}

export default class BTree {
  root: TreeNode = new TreeNode();

  t: number = 3;

  search(value: number, node: TreeNode = this.root): string {
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

    return '';
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

  // split(node: TreeNode) {
  //   // If the node doesn't need to be split, abort
  //   if (node.children.length < this.t) {
  //   } else {
  //     // Otherwise, Split

  //     // Find index of 'middle' key
  //     const middleIndex = Math.ceil(node.keys.length / 2);
  //   }
  // }
}
