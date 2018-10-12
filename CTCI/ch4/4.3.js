/*
	List of Depths: Given a binary tree, design an algorithm which creates
	a linked list of all the nodes at each depth (e.g., if you have a tree with depth 0,
	you'll have 0 linked lists).
 */

export default function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Node.prototype.insert = function(value) {
  if (value < this.value) {
    if (!this.left) {
      return (this.left = new Node(value));
    }
    return this.left.insert(value);
  }

  return this.right ? this.right.insert(value) : (this.right = new Node(value));
};

Node.prototype.print = function() {
  const leftstr = this.left ? `${this.left.print()}, ` : '';
  return leftstr + this.value + (this.right ? `, ${this.right.print()}` : '');
};

const root = new Node(0); // start with a node at 0

// for (let i = 0; i < 10; i++) {
//  root.insert(Math.floor(Math.random() * (20 - -20)) - 20);
// }
//
// console.log(root.print()); // print the tree

Node.prototype.listify = function() {
  const lists = [[this.value]];
  let nextQueue = [this.right, this.left];

  let queue;

  while (nextQueue.length !== 0) {
    queue = nextQueue;
    nextQueue = [];
    const newlist = [];
    while (queue.length !== 0) {
      const node = queue.pop();
      if (node) {
        if (node.left) {
          nextQueue.unshift(node.left);
        }
        if (node.right) {
          nextQueue.unshift(node.right);
        }
        newlist.push(node.value);
      }
    }
    lists.push(newlist);
  }

  return lists;
};

console.log(root.listify());
