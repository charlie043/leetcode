// https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return head
  
  let _head = head
  while (_head) {
    if (_head.val === val) {
      _head = _head.next
    } else {
      break
    }
  }
  
  let next = _head
  while (next) {
    if (next.next && next.next.val === val) {
      next.next = next.next.next
    } else {
      next = next.next
    }
  }
  return _head
};
