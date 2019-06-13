// Remove all elements from a linked list of integers that have value val.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export default function removeElements(head, val) {
  if (head === null) return null;
  let prev = null;
  let curr = head;
  let next = null;
  let hasHead = false;
  while (curr) {
    next = curr.next;
    if (curr.val === val) {
      // delete
      curr = null;
      // join links
      if (prev) prev.next = next;
    } else {
      prev = curr;
      if (!hasHead) {
        head = curr;
        hasHead = true;
      }
    }
    curr = next;
  }
  if (!prev) head = null;
  return head;
}
