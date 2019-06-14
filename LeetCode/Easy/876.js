// This solution uses the 'runner method' mentioned in CTCI

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
export default function middleNode(head) {
  if (!head) return null;
  let next = head;
  let nextNext = head;

  while (next.next && nextNext && nextNext.next && nextNext.next.next) {
    next = next.next;
    nextNext = nextNext.next.next;
  }

  if (nextNext.next) {
    return next.next;
  }

  return next;
}
