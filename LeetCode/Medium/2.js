// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits
// are stored in reverse order and each of their nodes contain a single digit. Add the two
// numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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
import { ListNode } from '../globals';

export default function addTwoNumbers(l1, l2) {
  let carry = false;
  let ans;
  let prev;
  while (l1 || l2 || carry) {
    const val1 = (l1 && l1.val) || 0;
    const val2 = (l2 && l2.val) || 0;
    let sum = val1 + val2;
    if (carry) sum++;
    carry = sum > 9;
    const mod = sum % 10;
    if (ans) {
      prev.next = new ListNode(mod);
      prev = prev.next;
    } else {
      ans = new ListNode(mod);
      prev = ans;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return ans;
}
