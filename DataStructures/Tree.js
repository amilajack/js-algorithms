// @flow
class Node {
  children: Node[]

  value: string | null

  constructor(value: any = null, children: Node[] = []) {
    this.children = children;
    this.value = value;
  }
}

export default class Tree {
  root: Node = new Node()

  add(node: Node, value: string): Node {
    const child = new Node(value);
    node.children.push(child);
    return child;
  }

  remove() {}

  find(value: any, node: Node): bool {
    if (node.value === value) return true;
    if (node.children.length < 1) return false;

    for (const child of node.children) {
      this.find(value, child);
    }
  }
}

const soo = new Tree();
const doo = soo.add(soo.root, 'value');
soo.add(doo, 'no');
