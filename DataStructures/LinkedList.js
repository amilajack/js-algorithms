// LinkedList
//
// ex. A list of objects with values and nexts to other values
//
// vowels: ['a', next] -> ['b', next] -> ['c', next]
//         ^^^^^^^^^^^   node             ^ data  ^ next
//
// Random Access: O(n)
// Insertion/Deletion: O(1)
//
// @flow
import { expect } from 'chai'


class LinkedList {
  head: Node

  tail: Node

  integrity = new Set()

  constructor() {
    this.head = new Node({})
  }

  isEmpty(): bool {
    return !!this.head
  }

  // Remove first link
  remove() {
    if (!this.isEmpty() && this.head.hasNext()) {
      this.head = this.head.next
    }
  }

  has() {}

  next() {}

  insert(data: any, begin?: Node): bool {
    const node = new Node(data)
    if (begin && this.integrity.has(node)) return false
    const headNext = (begin || this.head).next

    this.integrity.add(node)
    this.head.next = node
    this.head.next.next = headNext

    return true
  }
}

class Node {
  data: Object = {}

  next: Node | bool = false

  constructor(data: any = {}, next: Node | bool = false) {
    this.data = data
    this.next = next
  }

  hasNext(): bool {
    return this.next !== false
  }
}

const linkedList = new LinkedList()
linkedList.insert('soo')
linkedList.insert('doo')

console.log(JSON.stringify(linkedList))

expect(linkedList.head.data).to.eql({})
expect(linkedList.head.next.data).to.equal('doo')
expect(linkedList.head.next.next.data).to.equal('soo')
