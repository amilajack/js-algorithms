// 24. Swap Nodes in Pairs

// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function swapPairs(head) {
  let curr = head;
  let prev = null;
  let newHead;
  while (curr && curr.next) {
    const tmp = curr;
    const { next } = curr;
    if (!newHead) newHead = next;
    if (prev) prev.next = next;
    curr = curr.next.next;
    next.next = tmp;
    tmp.next = curr;
    prev = tmp;
  }
  return newHead || head;
}
