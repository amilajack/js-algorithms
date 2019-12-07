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

Node.prototype.insert = function insert(value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new Node(value);
      return;
    }
    return this.left.insert(value);
  }

  if (this.right) {
    this.right.insert(value);
  }

  this.right = new Node(value);

  return this.right;
};

Node.prototype.print = function print() {
  const leftstr = this.left ? `${this.left.print()}, ` : '';
  return leftstr + this.value + (this.right ? `, ${this.right.print()}` : '');
};

const root = new Node(0); // start with a node at 0

Node.prototype.listify = function listify() {
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

root.listify();
