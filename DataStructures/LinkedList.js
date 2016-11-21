// LinkedList
//
// ex. A list of objects with values and pointers to other values
//
// vowels: ['a', pointer] -> ['b', pointer] -> ['c', pointer]
//         ^^^^^^^^^^^^^^ node                   ^ data  ^ pointer
//
// Random Access: O(n)
// Insertion/Deletion: O(1)
//
// @flow


class LinkedList {
  head: Node | null = null

  tail: Node | null = null

  remove() {}

  has() {}

  next() {}

  insert(begin: Node, pointer: ?Node = null) {

  }
}


class Node {
  data: Object = {}

  pointer: Node | null = null

  constructor(pointer: Node | null, data: Object = {}) {
    this.data = data
    this.pointer = pointer
  }
}


const some = new LinkedList()
some.insert()
