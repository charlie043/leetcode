// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return head
  const vals = []
  let node = head
  while (node) {
    vals.push(node.val)
    node = node.next
  }
  const root = new ListNode(vals.pop())
  let next = root
  while (vals.length) {
    const node = new ListNode(vals.pop())
    next.next = node
    next = node
  }
  return root
};
