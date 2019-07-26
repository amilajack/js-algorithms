class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(val) {
    const node = new Node(val);
    const { tail } = this;
    if (tail) {
      node.prev = tail;
      node.next = null;
      this.tail = node;
      this.tail.next = node;
    }
    if (!this.head) this.head = node;
    this.tail = node;
    this.size++;
    return node;
  }

  remove(node) {
    const { next } = node;
    const { prev } = node;
    if (!prev && !next) {
      this.head = null;
      this.tail = null;
    }
    if (prev) {
      prev.next = next;
      if (next) next.prev = prev;
    }
    node.prev = null;
    node.next = null;
    this.size--;
  }
}

/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.dll = new DLL();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1;
  const item = this.map.get(key);
  // move item to front of DLL
  this.dll.remove(item);
  const { head } = this.dll;
  if (head) {
    head.prev = item;
    item.next = head;
  }
  item.prev = null;
  this.dll.head = item;
  return item.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // delete in doubly linked list
  if (this.dll.size === this.capacity) {
    this.map.delete(this.dll.tail.val);
    this.dll.remove(this.dll.tail);
  }
  const node = this.dll.add(value);
  this.map.set(key, node);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
