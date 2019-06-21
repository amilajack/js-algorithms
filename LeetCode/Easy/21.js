// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a new list. The new list should be
// made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export default function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let head = l1.val < l2.val ? l1 : l2;
  const first = head;
  let other = l1.val < l2.val ? l2 : l1;

  while (head && other) {
    if (!head.next) {
      head.next = other;
      break;
    } else if (head.next.val <= other.val) {
      head = head.next;
    } else {
      const dummy = head.next;
      head.next = other;
      other = dummy;
      head = head.next;
    }
  }

  return first;
}
