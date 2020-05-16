// https://leetcode.com/problems/odd-even-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const copy = (node) => {
  return new ListNode(node.val)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head || !head.next || !head.next.next) return head
  const oddHead = copy(head)
  let oddLast = oddHead
  const evenHead = copy(head.next)
  let evenLast = evenHead
  let next = head.next.next
  let odd = true
  while (next) {
    const _n = copy(next)
    if (odd) {
      oddLast.next = _n
      oddLast = _n
    } else {
      evenLast.next = _n
      evenLast = _n
    }
    next = next.next
    odd = !odd
  }
  oddLast.next = evenHead
  return oddHead
};
