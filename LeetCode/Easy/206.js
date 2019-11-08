// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

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
export function reverseList(head) {
  let curr = head;
  let prev = null;
  while (curr) {
    const { next } = curr;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

export default function reverseListRecursive(head) {
  // head.next === null recursion-Base
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  const newHead = reverseListRecursive(head.next);
  // reverse linked list
  head.next.next = head;
  // disconnect the original connection
  head.next = null;
  return newHead;
}
