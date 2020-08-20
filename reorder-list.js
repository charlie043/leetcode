// https://leetcode.com/problems/reorder-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) {
    return null
  }
  const nodes = []
  let next = head
  while (next) {
    nodes.push(next)
    next = next.next
  }
  const s = nodes.shift()
  let last = s
  let pop = true
  while (nodes.length) {
    if (pop) {
      last.next = nodes.pop()
    } else {
      last.next = nodes.shift()
    }
    last = last.next
    pop = !pop
  }
  last.next = null
  return s
};
